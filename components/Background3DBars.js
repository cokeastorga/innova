'use client';

import './Background3DBars.css';

export default function Background3DBars() {
  return (
    <div className="fixed-3d-backdrop" aria-hidden="true">
      {/* Dynamic ambient color glows */}
      <div className="fixed-3d-glow fixed-3d-glow--orange" />
      <div className="fixed-3d-glow fixed-3d-glow--lime" />

      {/* Floating 3D Diagonal Crossing Track */}
      <div className="fixed-3d-track">
        {/* Barra 1: Naranja 3D Diagonal */}
        <div className="fixed-3d-bar fixed-3d-bar--orange">
          <span className="fixed-3d-bar-sheen" />
        </div>

        {/* Barra 2: Verde Limón 3D Diagonal Cruzada */}
        <div className="fixed-3d-bar fixed-3d-bar--lime">
          <span className="fixed-3d-bar-sheen" />
        </div>
      </div>
    </div>
  );
}
