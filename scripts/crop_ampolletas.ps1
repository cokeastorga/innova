Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile((Join-Path $PSScriptRoot "temp_raw_images\ampolletas.jpg"))
$minX = $src.Width; $maxX = 0; $minY = $src.Height; $maxY = 0

for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        if ($c.R -lt 248 -or $c.G -lt 248 -or $c.B -lt 248) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$pad = 10
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($src.Width - 1, $maxX + $pad)
$maxY = [Math]::Min($src.Height - 1, $maxY + $pad)

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1
Write-Host "Detected bounding box: X=$minX, Y=$minY, W=$cropW, H=$cropH"

$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH)
$gc = [System.Drawing.Graphics]::FromImage($cropped)
$gc.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
$gc.Dispose()
$src.Dispose()

$dest = New-Object System.Drawing.Bitmap(800, 600, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.Clear([System.Drawing.Color]::White)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$scale = [Math]::Min(740.0 / $cropW, 540.0 / $cropH)
$newW = [int]($cropW * $scale)
$newH = [int]($cropH * $scale)
$posX = [int]((800 - $newW) / 2)
$posY = [int]((600 - $newH) / 2)

$g.DrawImage($cropped, $posX, $posY, $newW, $newH)
$g.Dispose()
$cropped.Dispose()

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
$outPath = Join-Path $PSScriptRoot "..\public\img\products\ampolletas.jpg"
$dest.Save($outPath, $encoder, $encoderParams)
$dest.Dispose()
Write-Host "Done! Saved $outPath"
