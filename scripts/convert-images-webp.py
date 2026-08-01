#!/usr/bin/env python3
"""
Convert the 5 lawyer photos from the .docx into optimized WebP files
and place them in /home/z/my-project/public/images/abogados/.

- image5.jpeg  -> abogado-principal.webp  (avatar a MANTENER - rostro real)
- image16.jpeg -> equipo-1.webp
- image17.jpeg -> equipo-2.webp
- image18.jpeg -> equipo-3.webp
- image19.jpeg -> equipo-4.webp
"""
from PIL import Image
from pathlib import Path

SRC = Path("/home/z/my-project/download/docx-images")
DST = Path("/home/z/my-project/public/images/abogados")
DST.mkdir(parents=True, exist_ok=True)

CONVERSIONS = [
    ("image5.jpeg",  "abogado-principal.webp"),
    ("image16.jpeg", "equipo-1.webp"),
    ("image17.jpeg", "equipo-2.webp"),
    ("image18.jpeg", "equipo-3.webp"),
    ("image19.jpeg", "equipo-4.webp"),
]

for src_name, dst_name in CONVERSIONS:
    src = SRC / src_name
    if not src.exists():
        print(f"[!] No existe {src}")
        continue
    img = Image.open(src).convert("RGB")
    # Resize manteniendo aspecto: max 1200px en el lado más largo
    max_side = 1200
    if max(img.size) > max_side:
        ratio = max_side / max(img.size)
        new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
        img = img.resize(new_size, Image.LANCZOS)
    out = DST / dst_name
    img.save(out, "WEBP", quality=82, method=6)
    size_kb = out.stat().st_size / 1024
    print(f"[OK] {src_name} -> {dst_name}  ({img.size[0]}x{img.size[1]}, {size_kb:.1f} KB)")

print("\nDone. Files at:", DST)
