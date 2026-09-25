Add-Type -AssemblyName System.Drawing

$rawDir = Join-Path $PSScriptRoot "temp_raw_images"
$outDir = Join-Path $PSScriptRoot "..\public\img\products"

$items = @(
    @{ Source = "correa-accesorios-2.jpg"; Target = "correa-accesorios.jpg" },
    @{ Source = "aceite-transmision.png"; Target = "aceite-transmision.jpg" },
    @{ Source = "desengrasante.png"; Target = "desengrasante.jpg" },
    @{ Source = "terminal-direccion.png"; Target = "terminal-direccion.jpg" },
    @{ Source = "cremallera.jpg"; Target = "cremallera.jpg" },
    @{ Source = "rodamiento-empuje.jpg"; Target = "rodamiento-empuje.jpg" },
    @{ Source = "cruceta-cardan.png"; Target = "cruceta-cardan.jpg" },
    @{ Source = "tambor-freno.jpg"; Target = "tambor-freno.jpg" },
    @{ Source = "cilindro-freno.jpg"; Target = "cilindro-freno.jpg" },
    @{ Source = "opticos-focos.jpg"; Target = "opticos-focos.jpg" },
    @{ Source = "ampolletas.jpg"; Target = "ampolletas.jpg" },
    @{ Source = "aceite-5w30.png"; Target = "aceite-5w30.jpg" },
    @{ Source = "sensor-abs.jpg"; Target = "sensor-abs.jpg" }
)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

foreach ($item in $items) {
    $srcPath = Join-Path $rawDir $item.Source
    $destPath = Join-Path $outDir $item.Target

    if (-not (Test-Path $srcPath)) {
        Write-Warning "Source file not found: $srcPath"
        continue
    }

    Write-Host "Processing $($item.Source) -> $($item.Target)"
    
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $targetWidth = 800
    $targetHeight = 600
    $dest = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $maxWidth = $targetWidth - 40
    $maxHeight = $targetHeight - 40
    $scale = [Math]::Min($maxWidth / $src.Width, $maxHeight / $src.Height)
    $newW = [int]($src.Width * $scale)
    $newH = [int]($src.Height * $scale)
    $posX = [int](($targetWidth - $newW) / 2)
    $posY = [int](($targetHeight - $newH) / 2)

    $g.DrawImage($src, $posX, $posY, $newW, $newH)
    $g.Dispose()
    $src.Dispose()

    $dest.Save($destPath, $encoder, $encoderParams)
    $dest.Dispose()

    $size = (Get-Item $destPath).Length
    Write-Host "  Successfully created $destPath ($size bytes)"
}
