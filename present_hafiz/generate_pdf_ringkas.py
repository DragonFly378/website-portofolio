#!/usr/bin/env python3
"""
Executive Summary (2 Slides) - Muhammad Hafiz Hisbullah
For management-level audience (GM, VP, SVP) at Telkomsel.
Visual-heavy, business language, activity photos filling every space.
"""

from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
import os

DIR = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(DIR, "portfolio_hafiz_ringkas.pdf")
IMG = os.path.join(os.path.dirname(DIR), "public")
W, H = landscape(A4)

# Colors
NAVY = HexColor("#1B2838")
RED = HexColor("#E4002B")
WHITE = HexColor("#FFFFFF")
TXT = HexColor("#DCDCDC")
TXT2 = HexColor("#9E9E9E")
GRN = HexColor("#4CAF50")
GOLD = HexColor("#FFB703")
DARK = HexColor("#111E2B")
CARD = HexColor("#1E3248")
BORDER = HexColor("#3A5A7A")

# Layout
M = 16
HDR = 32
GAP = 6
CW = W - M * 2


def setup(c, title, sub=None):
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(RED)
    c.rect(0, H - HDR, W, HDR, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(M, H - 21, title)
    if sub:
        c.setFont("Helvetica", 6.5)
        c.setFillColor(HexColor("#FFCDD2"))
        c.drawString(M, H - 30, sub)


def ftr(c, n, total):
    c.setFont("Helvetica", 5)
    c.setFillColor(TXT2)
    c.drawString(M, 4, "Internal")
    c.drawRightString(W - M, 4, f"{n} / {total}")


def wrap(c, text, font, fs, maxw):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        t = cur + " " + w if cur else w
        if c.stringWidth(t, font, fs) < maxw:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_photo(c, path, x, y, w, h, caption=None, sub_caption=None):
    """Draw a photo with optional caption bar overlaid at bottom."""
    if not os.path.exists(path):
        return
    # Dark bg
    c.setFillColor(DARK)
    c.rect(x, y, w, h, fill=1, stroke=0)
    # Image
    c.drawImage(path, x, y, width=w, height=h,
                preserveAspectRatio=True, anchor='c', mask='auto')
    # Caption bar overlay at bottom
    if caption:
        bar_h = 22 if sub_caption else 14
        c.setFillColor(HexColor("#000000"))
        c.saveState()
        c.setFillAlpha(0.65)
        c.rect(x, y, w, bar_h, fill=1, stroke=0)
        c.restoreState()
        c.setFont("Helvetica-Bold", 6.5)
        c.setFillColor(WHITE)
        c.drawString(x + 4, y + bar_h - 9, caption)
        if sub_caption:
            c.setFont("Helvetica", 5.5)
            c.setFillColor(HexColor("#CCCCCC"))
            c.drawString(x + 4, y + 3, sub_caption)


# ============== SLIDE 1 ==============
def slide_1(c):
    setup(c, "Muhammad Hafiz Hisbullah",
          "Operational Support | Telkomsel Eastern Jabotabek")

    ZONE_A = 140
    ZONE_C = 290
    ZONE_B = CW - ZONE_A - ZONE_C - GAP * 2

    top = H - HDR - 8
    bot = 12

    # ===== ZONE A: Profile + Activity Photo =====
    ax = M
    ay = top

    # Portrait photo
    photo_path = os.path.join(DIR, "hafiz_red.jpg")
    photo_s = 65
    if os.path.exists(photo_path):
        px = ax + (ZONE_A - photo_s) / 2
        c.drawImage(photo_path, px, ay - photo_s,
                    width=photo_s, height=photo_s,
                    preserveAspectRatio=True, anchor='c', mask='auto')
    ay -= photo_s + 10

    # Name
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(WHITE)
    c.drawCentredString(ax + ZONE_A / 2, ay, "Muhammad Hafiz")
    ay -= 13
    c.drawCentredString(ax + ZONE_A / 2, ay, "Hisbullah")
    ay -= 16

    # Role
    c.setFont("Helvetica", 6.5)
    c.setFillColor(TXT2)
    c.drawCentredString(ax + ZONE_A / 2, ay, "Operational Support")
    ay -= 10
    c.drawCentredString(ax + ZONE_A / 2, ay, "Eastern Jabotabek")
    ay -= 10
    c.drawCentredString(ax + ZONE_A / 2, ay, "Masa Kerja: 1-2 Tahun")
    ay -= 14

    # Divider
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.4)
    c.line(ax + 8, ay, ax + ZONE_A - 8, ay)
    ay -= 10

    # 3 taglines
    c.setFont("Helvetica", 6.5)
    c.setFillColor(TXT)
    taglines = [
        "Membangun solusi",
        "monitoring bisnis",
        "",
        "Mengotomasi workflow",
        "untuk 10+ managers",
        "",
        "Campaign, workshop,",
        "& field operations",
    ]
    for line in taglines:
        if line == "":
            ay -= 6
            continue
        c.drawCentredString(ax + ZONE_A / 2, ay, line)
        ay -= 9

    # Fill remaining space with activity photo
    ay -= 4
    remaining_h = ay - bot
    if remaining_h > 30:
        draw_photo(c, os.path.join(DIR, "sosialisasi_mantapp2.png"),
                   ax, bot, ZONE_A, remaining_h,
                   "Briefing Tim Operasional",
                   "Koordinasi program peningkatan transaksi")

    # ===== ZONE B: Impact + Product Previews =====
    bx = M + ZONE_A + GAP
    by = top

    # Section label
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(WHITE)
    c.drawCentredString(bx + ZONE_B / 2, by, "Impact at a Glance")
    by -= 16

    # 4 stat cards (2x2, compact)
    card_w = (ZONE_B - GAP) / 2
    card_h = 55

    stats = [
        ("~90%", "Reporting", "Lebih Cepat"),
        ("4", "Solusi Bisnis", "Deployed"),
        ("10+", "Stakeholders", "Terlayani Daily"),
        ("40+", "Halaman", "Monitoring Aktif"),
    ]

    for i, (num, l1, l2) in enumerate(stats):
        col = i % 2
        row = i // 2
        cx = bx + col * (card_w + GAP)
        cy = by - row * (card_h + GAP)

        c.setFillColor(CARD)
        c.roundRect(cx, cy - card_h, card_w, card_h, 4, fill=1, stroke=0)
        c.setFillColor(RED)
        c.rect(cx, cy - card_h, 3, card_h, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 18)
        c.setFillColor(RED)
        c.drawCentredString(cx + card_w / 2, cy - 24, num)
        c.setFont("Helvetica", 7)
        c.setFillColor(TXT)
        c.drawCentredString(cx + card_w / 2, cy - 36, l1)
        c.drawCentredString(cx + card_w / 2, cy - 46, l2)

    # Efficiency bar
    eff_y = by - 2 * (card_h + GAP) - 8
    eff_h = 30
    c.setFillColor(HexColor("#0D2818"))
    c.roundRect(bx, eff_y - eff_h, ZONE_B, eff_h, 4, fill=1, stroke=0)
    c.setStrokeColor(GRN)
    c.setLineWidth(0.8)
    c.roundRect(bx, eff_y - eff_h, ZONE_B, eff_h, 4, fill=0, stroke=1)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GRN)
    c.drawCentredString(bx + ZONE_B / 2, eff_y - 12,
                        "Reporting: 2-3 jam \u2192 10-15 menit (~90%)")
    c.setFont("Helvetica", 6.5)
    c.setFillColor(TXT2)
    c.drawCentredString(bx + ZONE_B / 2, eff_y - 23,
                        "Stakeholders akses data mandiri 24/7")

    # Product screenshots filling remaining space
    prod_top = eff_y - eff_h - 6
    prod_h = (prod_top - bot - GAP) / 2

    # Dashboard screenshot
    draw_photo(c, os.path.join(IMG, "dashboard_summary.png"),
               bx, prod_top - prod_h, ZONE_B, prod_h,
               "Business Monitoring Platform",
               "Dashboard terpusat untuk 10+ territory managers")

    # Second product screenshot
    draw_photo(c, os.path.join(IMG, "ro5e_site.png"),
               bx, bot, ZONE_B, prod_h,
               "5G Outlet Performance Tracker",
               "Self-service monitoring performa outlet real-time")

    # ===== ZONE C: Activity Photos Grid (4 photos) =====
    cx = M + ZONE_A + GAP + ZONE_B + GAP
    total_h = top - bot
    photo_gap = 4
    n_photos = 4
    per_h = (total_h - photo_gap * (n_photos - 1)) / n_photos

    activity_photos = [
        ("campaign_meta2.jpg",
         "Memimpin Workshop Digital Campaign",
         "Inisiasi pelatihan Meta Ads untuk kapabilitas tim territory"),
        ("kunjungan_grapari.png",
         "Field Visit: Monitoring Outlet",
         "Kunjungan langsung untuk evaluasi kualitas layanan GraPARI"),
        ("sosialisasi_mantapp.png",
         "Koordinasi Program MANTAPP",
         "Cross-team collaboration program peningkatan transaksi digital"),
        ("campaign_meta3.png",
         "Eksekusi Strategi Campaign",
         "Hands-on setup & optimasi campaign digital bersama tim"),
    ]

    py = top
    for img_file, caption, sub_cap in activity_photos:
        py -= per_h
        draw_photo(c, os.path.join(DIR, img_file),
                   cx, py, ZONE_C, per_h,
                   caption, sub_cap)
        py -= photo_gap

    ftr(c, 1, 2)


# ============== SLIDE 2 ==============
def slide_2(c):
    setup(c, "Impact & Komitmen Jangka Panjang",
          "Solusi yang sudah berjalan & alasan konversi ke karyawan tetap Telkomsel")

    ZONE_A_W = (CW - GAP) * 0.52
    ZONE_B_W = CW - ZONE_A_W - GAP

    top = H - HDR - 8
    bot = 12

    # ===== ZONE A: Solutions + Product Previews =====
    ax = M
    ay = top

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(WHITE)
    c.drawString(ax, ay, "Solusi yang Sudah Berjalan")
    ay -= 14

    solutions = [
        ("Business Monitoring Platform",
         "Dashboard terpusat untuk monitoring performa bisnis seluruh Eastern "
         "Jabotabek. Digunakan oleh 10+ territory managers, GM, dan AVP daily.",
         "40+ halaman aktif",
         "dashboard_dls_bogem.png"),
        ("5G Outlet Performance Tracker",
         "Territory reps mandiri monitoring performa outlet 5G \u2014 revenue, "
         "growth, dan ranking real-time tanpa request data.",
         "Self-service, real-time",
         None),
        ("Field Operations Scanner",
         "Digitalisasi proses scan & tracking outlet di lapangan. Menggantikan "
         "proses manual paper-based.",
         "Seluruh area Eastern",
         "tsel_scanner_site.png"),
        ("Campaign Hub MaxStream",
         "Satu link untuk semua info campaign \u2014 cara beli, aktivasi, dan "
         "download. Distribusi ke field team & customer.",
         "Public-facing",
         None),
    ]

    # Calculate layout: solutions + efficiency bar + 1 activity photo
    eff_h = 28
    bottom_photo_h = 80
    avail_for_cards = top - bot - 14 - eff_h - bottom_photo_h - 16
    sol_gap = 4
    card_h = (avail_for_cards - sol_gap * (len(solutions) - 1)) / len(solutions)

    for i, (name, desc, highlight, screenshot) in enumerate(solutions):
        cy = ay

        # Card bg
        c.setFillColor(CARD)
        c.roundRect(ax, cy - card_h, ZONE_A_W, card_h, 4, fill=1, stroke=0)
        c.setFillColor(RED)
        c.rect(ax, cy - card_h, 3, card_h, fill=1, stroke=0)

        # If has screenshot, split card: left text, right screenshot
        text_w = ZONE_A_W - 10
        if screenshot:
            ss_w = 90
            text_w = ZONE_A_W - ss_w - 14
            # Screenshot
            ss_path = os.path.join(IMG, screenshot)
            if os.path.exists(ss_path):
                c.setFillColor(DARK)
                c.rect(ax + ZONE_A_W - ss_w - 4, cy - card_h + 3,
                       ss_w, card_h - 6, fill=1, stroke=0)
                c.drawImage(ss_path,
                            ax + ZONE_A_W - ss_w - 3, cy - card_h + 4,
                            width=ss_w - 2, height=card_h - 8,
                            preserveAspectRatio=True, anchor='c', mask='auto')

        # Name
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(WHITE)
        c.drawString(ax + 10, cy - 11, name)

        # Highlight
        c.setFont("Helvetica-Bold", 6)
        c.setFillColor(GRN)
        tag_x = ax + 10 + c.stringWidth(name, "Helvetica-Bold", 8) + 6
        if tag_x + c.stringWidth(highlight, "Helvetica-Bold", 6) < ax + text_w:
            c.drawString(tag_x, cy - 10, highlight)

        # Description
        desc_lines = wrap(c, desc, "Helvetica", 7, text_w - 6)
        c.setFont("Helvetica", 7)
        c.setFillColor(TXT)
        dy = cy - 24
        for ln in desc_lines:
            c.drawString(ax + 10, dy, ln)
            dy -= 9

        ay -= card_h + sol_gap

    # Efficiency bar
    ay -= 2
    c.setFillColor(HexColor("#0D2818"))
    c.roundRect(ax, ay - eff_h, ZONE_A_W, eff_h, 4, fill=1, stroke=0)
    c.setStrokeColor(GRN)
    c.setLineWidth(0.8)
    c.roundRect(ax, ay - eff_h, ZONE_A_W, eff_h, 4, fill=0, stroke=1)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GRN)
    c.drawCentredString(ax + ZONE_A_W / 2, ay - 11,
                        "Reporting: 2-3 jam \u2192 10-15 menit (~90% faster)")
    c.setFont("Helvetica", 6.5)
    c.setFillColor(TXT2)
    c.drawCentredString(ax + ZONE_A_W / 2, ay - 22,
                        "Stakeholders akses data mandiri 24/7")
    ay -= eff_h + 4

    # Activity photo filling bottom of Zone A
    remaining = ay - bot
    if remaining > 20:
        draw_photo(c, os.path.join(DIR, "kunjungan_grapari3.png"),
                   ax, bot, ZONE_A_W, remaining,
                   "Evaluasi Layanan di Lapangan",
                   "Monitoring langsung kualitas service & produk outlet")

    # ===== ZONE B: Why Kartap + Activity Photos =====
    bx = M + ZONE_A_W + GAP
    by = top

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(WHITE)
    c.drawString(bx, by, "Mengapa Kartap?")
    by -= 14

    reasons = [
        ("1", "Paham Ekosistem Telkomsel",
         "1-2 tahun memahami ekosistem bisnis Eastern Jabotabek \u2014 "
         "stakeholders, data, proses kerja. 4 solusi aktif untuk 10+ "
         "territory managers daily."),
        ("2", "Impact yang Terukur",
         "Proses reporting manual 2-3 jam menjadi 10-15 menit otomatis. "
         "40+ halaman monitoring diakses daily oleh TM, GM, dan AVP."),
        ("3", "Siap Berkembang Lebih Luas",
         "Bukan hanya teknis \u2014 data, produk, campaign, workshop, "
         "entrepreneurship. Siap untuk peran yang lebih luas."),
    ]

    reason_h = 68
    r_gap = 5
    for i, (num, title, desc) in enumerate(reasons):
        ry = by

        c.setFillColor(CARD)
        c.roundRect(bx, ry - reason_h, ZONE_B_W, reason_h, 4, fill=1, stroke=0)
        c.setFillColor(RED)
        c.rect(bx, ry - reason_h, 3, reason_h, fill=1, stroke=0)

        # Number circle
        c.setFillColor(RED)
        c.circle(bx + 18, ry - 16, 9, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(WHITE)
        c.drawCentredString(bx + 18, ry - 20, num)

        # Title
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(WHITE)
        c.drawString(bx + 32, ry - 20, title)

        # Description
        desc_lines = wrap(c, desc, "Helvetica", 7, ZONE_B_W - 20)
        c.setFont("Helvetica", 7)
        c.setFillColor(TXT)
        dy = ry - 34
        for ln in desc_lines:
            c.drawString(bx + 10, dy, ln)
            dy -= 9

        by -= reason_h + r_gap

    # Activity photos grid filling remaining space (3 photos in a row)
    by -= 2
    remaining_h = by - bot - 18  # 18 for quote
    photo_row_w = (ZONE_B_W - GAP * 2) / 3

    bottom_photos = [
        ("campaign_meta.jpg",
         "Kolaborasi Tim",
         "Eksekusi campaign bersama"),
        ("kunjungan_grapari2.png",
         "Review Outlet",
         "Evaluasi produk di lapangan"),
        ("sosialisasi_mantapp2.png",
         "Koordinasi Program",
         "Diskusi strategi bersama tim"),
    ]

    if remaining_h > 30:
        for i, (img_file, cap, sub) in enumerate(bottom_photos):
            px = bx + i * (photo_row_w + GAP)
            draw_photo(c, os.path.join(DIR, img_file),
                       px, by - remaining_h, photo_row_w, remaining_h,
                       cap, sub)

    # Closing quote
    q_y = bot + 4
    c.setFont("Helvetica-BoldOblique", 7.5)
    c.setFillColor(GOLD)
    c.drawCentredString(bx + ZONE_B_W / 2, q_y,
                        '"Let\'s build the future of Telkomsel together."')

    ftr(c, 2, 2)


# ============== MAIN ==============
def main():
    c = canvas.Canvas(OUT, pagesize=landscape(A4))
    c.setTitle("Executive Summary - Muhammad Hafiz Hisbullah - Telkomsel")
    c.setAuthor("Muhammad Hafiz Hisbullah")

    slide_1(c)
    c.showPage()
    slide_2(c)

    c.save()
    print(f"PDF generated: {OUT}")
    print(f"Total slides: 2")


if __name__ == "__main__":
    main()
