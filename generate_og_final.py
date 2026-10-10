import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

def build_og_card():
    # 1. Base image: HERO FONDO.png (sunset skyline + attorney)
    bg_raw = Image.open('HERO FONDO.png').convert('RGBA')
    scale = H / bg_raw.height
    new_w = int(bg_raw.width * scale)
    bg = bg_raw.resize((new_w, H), Image.Resampling.LANCZOS)
    x_crop = bg.width - W
    canvas = bg.crop((x_crop, 0, x_crop + W, H)).copy()

    # 2. Dark gradient overlay on the left 60% for extreme contrast and clarity
    grad = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for x in range(W):
        if x < 420:
            alpha = 238
        elif x < 760:
            factor = (x - 420) / 340
            alpha = int(238 * (1 - factor))
        else:
            alpha = 0
        for y in range(H):
            grad.putpixel((x, y), (8, 12, 18, alpha))
            
    canvas = Image.alpha_composite(canvas, grad)
    draw = ImageDraw.Draw(canvas)

    # 3. Gold accent line at very top
    for x in range(W):
        t = x / W
        intensity = max(0, 1 - abs(t - 0.28) / 0.35)
        r = int(245 * intensity + 15)
        g = int(212 * intensity + 15)
        b = int(67 * intensity + 15)
        draw.point((x, 0), fill=(r, g, b, 240))
        draw.point((x, 1), fill=(r, g, b, 200))
        draw.point((x, 2), fill=(r, g, b, 120))

    # 4. Official Brand Logo
    logo = Image.open('logo oficial.png').convert('RGBA')
    logo_w = 400
    logo_h = int(logo.height * (logo_w / logo.width))
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    canvas.paste(logo, (75, 55), logo)

    # 5. Gold Separator Line
    draw.line([(75, 160), (450, 160)], fill=(212, 175, 55, 120), width=2)

    # 6. Badge: DEFENSA LEGAL ESTRATÉGICA
    font_badge = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 15)
    badge_text = 'DEFENSA LEGAL ESTRATÉGICA'
    bbox = font_badge.getbbox(badge_text)
    bw, bh = bbox[2] - bbox[0], bbox[3] - bbox[1]
    
    badge_x, badge_y = 75, 185
    pill = Image.new('RGBA', (bw + 28, bh + 14), (212, 175, 55, 35))
    p_draw = ImageDraw.Draw(pill)
    p_draw.rounded_rectangle([0, 0, bw + 27, bh + 13], radius=6, outline=(255, 215, 0, 140), width=1)
    canvas.paste(pill, (badge_x, badge_y), pill)
    draw.text((badge_x + 14, badge_y + 5), badge_text, font=font_badge, fill=(255, 230, 140, 255))

    # 7. Main Title & Value Headline (Georgia Bold)
    font_h1 = ImageFont.truetype('C:/Windows/Fonts/georgiab.ttf', 44)
    font_h2 = ImageFont.truetype('C:/Windows/Fonts/georgiab.ttf', 36)
    
    # Shadow + Text
    draw.text((77, 246), 'Protegemos tus derechos', font=font_h1, fill=(0, 0, 0, 200))
    draw.text((75, 244), 'Protegemos tus derechos', font=font_h1, fill=(255, 255, 255, 255))

    draw.text((77, 303), 'con excelencia y firmeza.', font=font_h2, fill=(0, 0, 0, 200))
    draw.text((75, 301), 'con excelencia y firmeza.', font=font_h2, fill=(255, 215, 60, 255)) # 24K Pure Gold tone

    # 8. Practice Area Capsules
    font_areas = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 16)
    areas = ['Derecho Penal', 'Derecho Civil', 'Derecho de Familia']
    ax = 75
    ay = 375
    for area in areas:
        abox = font_areas.getbbox(area)
        aw, ah = abox[2] - abox[0], abox[3] - abox[1]
        area_pill = Image.new('RGBA', (aw + 24, ah + 14), (255, 255, 255, 18))
        ap_draw = ImageDraw.Draw(area_pill)
        ap_draw.rounded_rectangle([0, 0, aw + 23, ah + 13], radius=6, outline=(212, 175, 55, 110), width=1)
        canvas.paste(area_pill, (ax, ay), area_pill)
        draw.text((ax + 12, ay + 6), area, font=font_areas, fill=(245, 245, 245, 255))
        ax += aw + 22

    # 9. Slogan & Credibility statement
    font_sub = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 19)
    draw.text((75, 442), 'Más de 15 años de experiencia y resultados comprobados.', font=font_sub, fill=(210, 218, 230, 245))

    # 10. Bottom Information Bar: Web + Location + Call to Action
    font_foot_bold = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 19)
    font_foot = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 17)
    
    draw.line([(75, 515), (600, 515)], fill=(212, 175, 55, 90), width=1)
    
    # Official Domain medinaalmontelawyers.com in Pure Gold
    domain_text = 'medinaalmontelawyers.com'
    draw.text((75, 532), domain_text, font=font_foot_bold, fill=(255, 220, 90, 255))
    
    # Location and Call to action
    bbox_d = font_foot_bold.getbbox(domain_text)
    dw = bbox_d[2] - bbox_d[0]
    draw.text((75 + dw + 18, 533), '•   Lima, Perú   •   Consultas Inmediatas', font=font_foot, fill=(200, 205, 215, 220))

    # 11. Save as JPEG (optimized specifically for WhatsApp and Social Media < 300KB)
    rgb_img = canvas.convert('RGB')
    rgb_img.save('public/og-image.jpg', 'JPEG', quality=88, optimize=True)
    rgb_img.save('public/og-whatsapp.jpg', 'JPEG', quality=88, optimize=True)

    # 12. Save as PNG (optimized)
    rgb_img.save('public/og-image.png', 'PNG', optimize=True)

    print('Generated successfully:')
    print(f"public/og-image.jpg: {os.path.getsize('public/og-image.jpg') / 1024:.1f} KB")
    print(f"public/og-whatsapp.jpg: {os.path.getsize('public/og-whatsapp.jpg') / 1024:.1f} KB")
    print(f"public/og-image.png: {os.path.getsize('public/og-image.png') / 1024:.1f} KB")

if __name__ == '__main__':
    build_og_card()
