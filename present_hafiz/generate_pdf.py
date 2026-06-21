#!/usr/bin/env python3
"""
Portfolio Presentation PDF Generator
Muhammad Hafiz Hisbullah - Telkomsel Interview
"""

from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
import os

# ============== CONFIG ==============
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "portfolio_hafiz.pdf")
PAGE_W, PAGE_H = landscape(A4)  # 842 x 595

# Colors
RED = HexColor("#EE1C25")
DARK_RED = HexColor("#B71C1C")
DARK = HexColor("#1A1A2E")
DARK2 = HexColor("#16213E")
WHITE = HexColor("#FFFFFF")
LIGHT_GRAY = HexColor("#F5F5F5")
MID_GRAY = HexColor("#9E9E9E")
DARK_GRAY = HexColor("#424242")
GOLD = HexColor("#FFB703")
GREEN = HexColor("#2E7D32")
BLUE = HexColor("#1565C0")
LIGHT_RED = HexColor("#FFEBEE")
LIGHT_BLUE = HexColor("#E3F2FD")
LIGHT_GREEN = HexColor("#E8F5E9")
LIGHT_GOLD = HexColor("#FFF8E1")

# Margins
M_LEFT = 50
M_RIGHT = 50
M_TOP = 50
M_BOTTOM = 40
CONTENT_W = PAGE_W - M_LEFT - M_RIGHT
CONTENT_H = PAGE_H - M_TOP - M_BOTTOM


def draw_slide_number(c, num, total):
    """Draw slide number at bottom right."""
    c.setFont("Helvetica", 8)
    c.setFillColor(MID_GRAY)
    c.drawRightString(PAGE_W - 30, 20, f"{num} / {total}")


def draw_header_bar(c, title, subtitle=None):
    """Draw a red header bar at top of slide."""
    # Red bar
    c.setFillColor(RED)
    c.rect(0, PAGE_H - 60, PAGE_W, 60, fill=1, stroke=0)
    # Title
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(M_LEFT, PAGE_H - 40, title)
    if subtitle:
        c.setFont("Helvetica", 10)
        c.drawString(M_LEFT, PAGE_H - 55, subtitle)


def draw_card(c, x, y, w, h, bg_color=LIGHT_GRAY, border_color=None):
    """Draw a rounded rectangle card."""
    c.setFillColor(bg_color)
    if border_color:
        c.setStrokeColor(border_color)
        c.setLineWidth(1)
        c.roundRect(x, y, w, h, 8, fill=1, stroke=1)
    else:
        c.roundRect(x, y, w, h, 8, fill=1, stroke=0)


def draw_stat_card(c, x, y, w, h, number, label, bg_color=WHITE, num_color=RED, border_color=None):
    """Draw a stat card with number and label."""
    draw_card(c, x, y, w, h, bg_color, border_color)
    c.setFont("Helvetica-Bold", 24)
    c.setFillColor(num_color)
    c.drawCentredString(x + w / 2, y + h - 38, str(number))
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK_GRAY)
    # Wrap label text
    words = label.split()
    lines = []
    current_line = ""
    for word in words:
        test = current_line + " " + word if current_line else word
        if c.stringWidth(test, "Helvetica", 9) < w - 16:
            current_line = test
        else:
            lines.append(current_line)
            current_line = word
    if current_line:
        lines.append(current_line)

    line_y = y + h - 55
    for line in lines:
        c.drawCentredString(x + w / 2, line_y, line)
        line_y -= 12


def draw_bullet_list(c, x, y, items, font_size=10, color=DARK_GRAY, spacing=16, bullet_color=RED, max_width=None):
    """Draw a bullet list. Returns final y position."""
    current_y = y
    for item in items:
        # Bullet
        c.setFillColor(bullet_color)
        c.circle(x + 4, current_y + 3, 3, fill=1, stroke=0)
        # Text
        c.setFillColor(color)
        c.setFont("Helvetica", font_size)

        if max_width:
            # Word wrap
            words = item.split()
            lines = []
            current_line = ""
            for word in words:
                test = current_line + " " + word if current_line else word
                if c.stringWidth(test, "Helvetica", font_size) < max_width:
                    current_line = test
                else:
                    lines.append(current_line)
                    current_line = word
            if current_line:
                lines.append(current_line)

            for i, line in enumerate(lines):
                c.drawString(x + 14, current_y, line)
                if i < len(lines) - 1:
                    current_y -= spacing
        else:
            c.drawString(x + 14, current_y, item)

        current_y -= spacing
    return current_y


def draw_progress_bar(c, x, y, w, h, progress, bar_color=RED, bg_color=LIGHT_GRAY):
    """Draw a progress bar."""
    # Background
    c.setFillColor(bg_color)
    c.roundRect(x, y, w, h, h / 2, fill=1, stroke=0)
    # Fill
    fill_w = max(w * min(progress, 1.0), h)
    c.setFillColor(bar_color)
    c.roundRect(x, y, fill_w, h, h / 2, fill=1, stroke=0)


# ============== SLIDES ==============

def slide_cover(c):
    """Slide 1: Cover"""
    # Full dark background
    c.setFillColor(DARK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Red accent bar at top
    c.setFillColor(RED)
    c.rect(0, PAGE_H - 8, PAGE_W, 8, fill=1, stroke=0)

    # Red accent line
    c.setStrokeColor(RED)
    c.setLineWidth(3)
    c.line(M_LEFT, PAGE_H / 2 + 80, M_LEFT + 80, PAGE_H / 2 + 80)

    # Name
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 36)
    c.drawString(M_LEFT, PAGE_H / 2 + 45, "Muhammad Hafiz Hisbullah")

    # Role
    c.setFont("Helvetica", 16)
    c.setFillColor(HexColor("#BDBDBD"))
    c.drawString(M_LEFT, PAGE_H / 2 + 15, "Operational Support & Product Engineer")

    # Company
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(RED)
    c.drawString(M_LEFT, PAGE_H / 2 - 10, "Telkomsel")
    c.setFillColor(HexColor("#BDBDBD"))
    c.setFont("Helvetica", 14)
    c.drawString(M_LEFT + c.stringWidth("Telkomsel", "Helvetica-Bold", 14) + 8, PAGE_H / 2 - 10, "| Eastern Jabotabek")

    # Tagline
    c.setFont("Helvetica-Oblique", 12)
    c.setFillColor(GOLD)
    c.drawString(M_LEFT, PAGE_H / 2 - 50, '"Building Tools, Automating Processes, Driving Efficiency"')

    # Bottom info
    c.setFont("Helvetica", 10)
    c.setFillColor(MID_GRAY)
    c.drawString(M_LEFT, 40, "Portfolio & Impact Presentation | 2025-2026")

    # Decorative circle (semi-transparent red)
    c.setFillColor(Color(0.93, 0.11, 0.15, alpha=0.12))
    c.circle(PAGE_W - 150, PAGE_H / 2, 120, fill=1, stroke=0)
    c.setFillColor(Color(0.93, 0.11, 0.15, alpha=0.08))
    c.circle(PAGE_W - 120, PAGE_H / 2 - 40, 80, fill=1, stroke=0)


def slide_profile(c):
    """Slide 2: Profil Singkat"""
    draw_header_bar(c, "Profil Singkat", "Resume & latar belakang profesional")

    y = PAGE_H - 90

    # Left column: Profile info
    left_w = CONTENT_W * 0.55
    right_x = M_LEFT + CONTENT_W * 0.58
    right_w = CONTENT_W * 0.42

    # Name & role
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, y, "Muhammad Hafiz Hisbullah")

    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(RED)
    c.drawString(M_LEFT, y - 25, "Operational Support & Product Engineer")

    c.setFont("Helvetica", 10)
    c.setFillColor(DARK_GRAY)
    c.drawString(M_LEFT, y - 42, "Telkomsel Eastern Jabotabek | Vendor/Outsource | 1-2 Tahun")

    # Divider
    c.setStrokeColor(HexColor("#E0E0E0"))
    c.setLineWidth(1)
    c.line(M_LEFT, y - 55, M_LEFT + left_w, y - 55)

    # Profile details
    details = [
        ("Pendidikan", "S1 Ilmu Komputer - Universitas Negeri Jakarta"),
        ("Posisi Saat Ini", "Operational Support & Product Engineer (Vendor)"),
        ("Lokasi", "Telkomsel Eastern Jabotabek (Bogor, Depok, Bekasi, Sukabumi, Garut)"),
        ("Fokus Kerja", "Data automation, dashboard development, campaign support"),
    ]

    dy = y - 75
    for label, value in details:
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(RED)
        c.drawString(M_LEFT, dy, label)
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        c.drawString(M_LEFT + 120, dy, value)
        dy -= 20

    # Right column: What I do (daily output)
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(DARK)
    c.drawString(right_x, y, "Output Pekerjaan Harian:")

    daily_tasks = [
        "Menjalankan automated data pipeline (Hadoop -> MySQL)",
        "Menyediakan data report untuk 10+ territory managers",
        "Menulis & maintain SQL queries untuk analisis bisnis",
        "Develop & maintain internal web dashboard",
        "Membuat whitelist campaign dari big data profiling",
        "Manage digital campaign (Meta Ads & MyAds)",
        "Handle ad-hoc data requests dari tim territory",
    ]
    draw_bullet_list(c, right_x, y - 22, daily_tasks, font_size=9, spacing=16, max_width=right_w)

    # Bottom: Before vs After comparison
    comp_y = dy - 30
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, comp_y, "Impact: Manual vs Otomasi")

    # Before card
    bw = (CONTENT_W - 30) / 2
    by = comp_y - 110

    draw_card(c, M_LEFT, by, bw, 95, LIGHT_RED, RED)
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 15, by + 75, "SEBELUM (Manual)")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK_GRAY)
    manual_items = [
        "Extract data manual dari server: 2-3 jam per task",
        "Copy-paste ke Excel, format manual",
        "Kirim file satu-satu ke territory manager",
        "Tidak ada dashboard - semua berbasis file Excel",
    ]
    my = by + 55
    for item in manual_items:
        c.drawString(M_LEFT + 15, my, item)
        my -= 14

    # After card
    ax = M_LEFT + bw + 30
    draw_card(c, ax, by, bw, 95, LIGHT_GREEN, GREEN)
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(GREEN)
    c.drawString(ax + 15, by + 75, "SESUDAH (Otomasi)")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK_GRAY)
    auto_items = [
        "Automated pipeline: 10-15 menit per task (cron job)",
        "Data langsung masuk MySQL, auto-transform",
        "Dashboard real-time, territory akses mandiri",
        "40+ halaman dashboard, self-service monitoring",
    ]
    ay = by + 55
    for item in auto_items:
        c.drawString(ax + 15, ay, item)
        ay -= 14

    # Efficiency arrow
    arrow_x = M_LEFT + bw + 5
    arrow_y = by + 47
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(arrow_x + 10, arrow_y, ">>")

    # Bottom stat
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(RED)
    c.drawCentredString(PAGE_W / 2, by - 15, "Efisiensi: 2-3 jam manual  -->  10-15 menit otomatis  |  Penghematan ~90% waktu per task")


def slide_overview(c):
    """Slide 3: Executive Summary"""
    draw_header_bar(c, "Executive Summary", "Ringkasan kontribusi selama di Telkomsel Eastern Jabotabek")

    # Tagline
    c.setFont("Helvetica-Bold", 13)
    c.setFillColor(DARK)
    y_start = PAGE_H - 95
    c.drawString(M_LEFT, y_start, "Membangun tools & otomasi yang membantu tim territory monitor performa bisnis secara efisien.")

    # Stats cards row
    cards = [
        ("4", "Products\nBuilt & Deployed"),
        ("20+", "Automation\nScripts"),
        ("200+", "SQL Queries\nWritten"),
        ("40+", "Dashboard\nPages"),
        ("10+", "Territory Managers\nServed"),
    ]

    card_w = (CONTENT_W - 40) / 5
    card_h = 85
    card_y = y_start - 110

    for i, (num, label) in enumerate(cards):
        cx = M_LEFT + i * (card_w + 10)
        draw_stat_card(c, cx, card_y, card_w, card_h, num, label.replace("\n", " "),
                      bg_color=WHITE, num_color=RED, border_color=HexColor("#E0E0E0"))

    # Three pillars
    pillar_y = card_y - 40
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, pillar_y, "Three Key Pillars:")

    pillars = [
        ("Data Automation & ETL", "Hadoop/Hive data pipeline, daily/weekly automated reports", RED),
        ("Product Development", "4 web applications built from scratch for internal use", BLUE),
        ("Campaign & Analytics", "Digital campaign management, audience targeting, performance reporting", GREEN),
    ]

    pillar_w = (CONTENT_W - 20) / 3
    pillar_h = 75
    px = M_LEFT
    py = pillar_y - 90

    for title, desc, color in pillars:
        # Card
        draw_card(c, px, py, pillar_w, pillar_h, WHITE, HexColor("#E0E0E0"))
        # Color accent bar
        c.setFillColor(color)
        c.rect(px, py + pillar_h - 6, pillar_w, 6, fill=1, stroke=0)
        # Title
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(DARK)
        c.drawString(px + 12, py + pillar_h - 24, title)
        # Desc (wrap)
        c.setFont("Helvetica", 8)
        c.setFillColor(DARK_GRAY)
        words = desc.split()
        lines = []
        current = ""
        for w in words:
            test = current + " " + w if current else w
            if c.stringWidth(test, "Helvetica", 8) < pillar_w - 24:
                current = test
            else:
                lines.append(current)
                current = w
        if current:
            lines.append(current)
        ly = py + pillar_h - 40
        for line in lines:
            c.drawString(px + 12, ly, line)
            ly -= 11

        px += pillar_w + 10


def slide_automation_overview(c):
    """Slide 3: Daily Task Automation - Overview"""
    draw_header_bar(c, "Data Automation & Efficiency", "Membangun sistem otomasi data harian dari Hadoop/Hive")

    y = PAGE_H - 90

    # Left column: Pipeline diagram
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, y, "Automated ETL Pipeline")

    # Pipeline steps
    steps = [
        ("Hadoop / Hive", "Big Data source\n(100M+ records)", DARK2),
        ("Bash + SSH", "Automated extraction\n& compression", RED),
        ("MySQL", "Structured storage\n& transformation", BLUE),
        ("Dashboard", "Real-time business\nmonitoring", GREEN),
    ]

    step_w = 155
    step_h = 65
    step_y = y - 90
    arrow_color = RED

    for i, (title, desc, color) in enumerate(steps):
        sx = M_LEFT + i * (step_w + 25)
        # Box
        draw_card(c, sx, step_y, step_w, step_h, WHITE, color)
        c.setFillColor(color)
        c.rect(sx, step_y + step_h - 5, step_w, 5, fill=1, stroke=0)
        # Title
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(color)
        c.drawString(sx + 10, step_y + step_h - 20, title)
        # Desc
        c.setFont("Helvetica", 8)
        c.setFillColor(DARK_GRAY)
        desc_lines = desc.split("\n")
        dy = step_y + step_h - 35
        for dl in desc_lines:
            c.drawString(sx + 10, dy, dl)
            dy -= 11

        # Arrow between steps
        if i < len(steps) - 1:
            ax = sx + step_w + 3
            ay = step_y + step_h / 2
            c.setStrokeColor(arrow_color)
            c.setFillColor(arrow_color)
            c.setLineWidth(2)
            c.line(ax, ay, ax + 15, ay)
            # Arrowhead
            p = c.beginPath()
            p.moveTo(ax + 15, ay - 5)
            p.lineTo(ax + 22, ay)
            p.lineTo(ax + 15, ay + 5)
            p.close()
            c.drawPath(p, fill=1, stroke=0)

    # Key scripts section
    scripts_y = step_y - 30
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, scripts_y, "Key Automation Scripts")

    scripts = [
        ("daily.sh", "Revenue & NAS data extraction - runs daily via cron"),
        ("bp.sh", "Full ETL: Hadoop extract -> gzip -> MySQL load -> summary transform"),
        ("io.sh", "IndiHome IO ordering data pipeline (New Sales tracking)"),
        ("run_all_wl_weekly.sh", "Comprehensive user profiling (500+ line SQL, 30+ CTEs)"),
        ("bb_mom_yoy_daily/", "Broadband Pack MoM & YoY daily trend comparison"),
    ]

    sy = scripts_y - 18
    for name, desc in scripts:
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(RED)
        c.drawString(M_LEFT + 10, sy, name)
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        c.drawString(M_LEFT + 185, sy, desc)
        sy -= 16

    # Impact box
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 50, LIGHT_RED, RED)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 15, impact_y + 32, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 32, "Proses manual 2-3 jam per task --> otomatis 10-15 menit (penghematan ~90% waktu)")
    c.drawString(M_LEFT + 70, impact_y + 17, "Serving 10+ territory managers: pak Rian, pak Irlan, pak Fajar, pak Yaski, pak Yudha, dan lainnya")


def slide_automation_detail(c):
    """Slide 4: Daily Task Automation - Detail"""
    draw_header_bar(c, "Automation Detail & Scope", "Cakupan otomasi data yang dibangun")

    y = PAGE_H - 85

    # Left column
    left_w = CONTENT_W * 0.48
    right_x = M_LEFT + CONTENT_W * 0.52
    right_w = CONTENT_W * 0.48

    # Daily Automation section
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(RED)
    c.drawString(M_LEFT, y, "Daily Automation")

    daily_items = [
        "Revenue & NAS data (Broadband, Voice, DLS, SMS)",
        "Business Performance summary by region/cluster/city",
        "BB Pack daily trend (CVM, Core, Acquisition, PV)",
        "MoM & YoY comparison automation",
        "MyTsel performance tracking",
    ]
    draw_bullet_list(c, M_LEFT, y - 20, daily_items, font_size=9, spacing=15, max_width=left_w - 20)

    # Weekly Automation
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(RED)
    c.drawString(M_LEFT, y - 110, "Weekly Automation")

    weekly_items = [
        "Whitelist generation (user profiling 30+ dimensions)",
        "ARPU segmentation, DRGB analysis, CVM profiling",
        "Device type, banking apps, MyTsel usage analysis",
        "Quota consumption & recharge behavior profiling",
        "Split & distribute ke masing-masing cluster/territory",
    ]
    draw_bullet_list(c, M_LEFT, y - 130, weekly_items, font_size=9, spacing=15, max_width=left_w - 20)

    # Right column - Campaign & Digital
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(BLUE)
    c.drawString(right_x, y, "Campaign Data Automation")

    campaign_items = [
        "Digital campaign whitelist per OTT platform:",
        "  Netflix, Disney+, Vidio, Vision+, Viu, WeTV,",
        "  HBO, iQiyi, ShortMax, YouTube Premium",
        "Campaign taker tracking & cohort analysis",
        "Monthly DLS (Digital Lifestyle) reporting",
    ]
    draw_bullet_list(c, right_x, y - 20, campaign_items, font_size=9, spacing=15,
                    bullet_color=BLUE, max_width=right_w - 20)

    # Ad-hoc Requests
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(GREEN)
    c.drawString(right_x, y - 110, "Ad-hoc Data Requests")

    adhoc_items = [
        "Custom SQL queries per territory manager request",
        "Cohort analysis (BB forward/backward, CVM)",
        "Market share household & youth analysis",
        "Voice of Customer & outlet profiling",
        "5G campaign taker analysis & renewal tracking",
    ]
    draw_bullet_list(c, right_x, y - 130, adhoc_items, font_size=9, spacing=15,
                    bullet_color=GREEN, max_width=right_w - 20)

    # Query expertise box at bottom
    box_y = 50
    draw_card(c, M_LEFT, box_y, CONTENT_W, 60, LIGHT_BLUE, BLUE)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(BLUE)
    c.drawString(M_LEFT + 15, box_y + 40, "Query Expertise:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 15, box_y + 25, "200+ SQL queries | HiveQL & MySQL | Complex JOINs, CTEs, Window Functions, Aggregations")
    c.drawString(M_LEFT + 15, box_y + 10, "Domains: Revenue, Cohort, CVM, Market Share, User Behavior, Campaign, App Usage, Banking Profile")


def slide_dashboard_onedirection(c):
    """Slide 5: Dashboard OneDirection"""
    draw_header_bar(c, "Product: Dashboard OneDirection", "Full-stack business performance monitoring dashboard")

    y = PAGE_H - 85

    # Stack info
    draw_card(c, M_LEFT, y - 30, CONTENT_W, 30, LIGHT_GRAY)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 10, y - 20, "Stack:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 50, y - 20, "Laravel (PHP) + Blade Templates + MySQL + Hadoop/Hive Integration + LDAP Auth + Chart.js")

    # Scale numbers
    scale_y = y - 55
    scales = [
        ("40+", "Views / Pages"),
        ("25+", "Controllers"),
        ("6", "Sync Commands"),
        ("5", "Export Features"),
    ]
    scale_w = (CONTENT_W - 30) / 4
    for i, (num, label) in enumerate(scales):
        sx = M_LEFT + i * (scale_w + 10)
        draw_stat_card(c, sx, scale_y - 55, scale_w, 55, num, label, WHITE, RED, HexColor("#E0E0E0"))

    # Modules - two columns
    mod_y = scale_y - 75
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, mod_y, "Dashboard Modules:")

    left_modules = [
        "Revenue Tracking (L1: BB, Voice, DLS, SMS)",
        "BB Pack Performance (CVM, Core, ACQ, PV)",
        "BB Pack Daily & Monthly Trend",
        "Market Share (Mobile, Household, Youth)",
        "Campaign Management & Compare",
        "Cohort Analysis (Package Group)",
    ]

    right_modules = [
        "Household / IndiHome (IO, PS per Channel/Speed)",
        "MyTsel Performance & Daily Trend",
        "Sales Driver (SA, SO, SD, SR, ST)",
        "Network (Site Profile, ODP Profile)",
        "Warmap (Direct/Indirect Sales, Branding)",
        "Stok Gudang SBP & Sales Plan",
    ]

    half_w = CONTENT_W * 0.48
    draw_bullet_list(c, M_LEFT, mod_y - 16, left_modules, font_size=9, spacing=14, max_width=half_w)
    draw_bullet_list(c, M_LEFT + CONTENT_W * 0.52, mod_y - 16, right_modules, font_size=9,
                    spacing=14, bullet_color=BLUE, max_width=half_w)

    # Impact
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 45, LIGHT_RED, RED)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 15, impact_y + 28, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 28, "Satu dashboard terpusat untuk monitoring business performance seluruh Eastern Jabotabek.")
    c.drawString(M_LEFT + 70, impact_y + 13, "Menggantikan proses manual Excel-based reporting menjadi real-time web dashboard.")


def slide_rose_5g(c):
    """Slide 6: RO5E 5G Dashboard"""
    draw_header_bar(c, "Product: RO5E 5G Outlet Dashboard", "Self-service outlet performance monitoring for 5G program")

    y = PAGE_H - 85

    # Stack
    draw_card(c, M_LEFT, y - 30, CONTENT_W, 30, LIGHT_GRAY)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 10, y - 20, "Stack:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 50, y - 20, "React + TypeScript + Vite + Tailwind CSS + shadcn/ui + Lucide Icons")

    # Two columns
    left_w = CONTENT_W * 0.48
    right_x = M_LEFT + CONTENT_W * 0.52
    right_w = CONTENT_W * 0.48

    # Features
    feat_y = y - 60
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, feat_y, "Key Features:")

    features = [
        "Login dengan Outlet ID - instant access ke data",
        "Dashboard revenue 5G vs baseline per outlet",
        "Growth metrics (actual vs baseline percentage)",
        "Ranking system per group (King/Knight/Pawn)",
        "Progress bar visual pencapaian target",
        "Revenue breakdown per bulan (Mei/Juni/Juli)",
        "Status banner: Target Tercapai / Belum",
        "Last update timestamp untuk data freshness",
    ]
    draw_bullet_list(c, M_LEFT, feat_y - 18, features, font_size=9, spacing=15, max_width=left_w)

    # How it works
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(right_x, feat_y, "How It Works:")

    steps = [
        "1. Outlet rep buka web app di HP",
        "2. Input Outlet ID untuk login",
        "3. Lihat dashboard: revenue, growth, ranking",
        "4. Bandingkan pencapaian vs baseline",
        "5. Identifikasi gap dan action plan",
    ]

    sy = feat_y - 18
    for step in steps:
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        c.drawString(right_x + 10, sy, step)
        sy -= 16

    # Metrics displayed
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(right_x, sy - 10, "Metrics Displayed:")

    metrics = [
        "Total Revenue 5G (IDR)",
        "Growth to Baseline (%)",
        "Rank dalam Group",
        "Baseline Akumulatif (3 bulan)",
        "Revenue per Bulan",
    ]
    draw_bullet_list(c, right_x, sy - 28, metrics, font_size=9, spacing=14,
                    bullet_color=BLUE, max_width=right_w)

    # Impact
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 45, LIGHT_GREEN, GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GREEN)
    c.drawString(M_LEFT + 15, impact_y + 28, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 28, "Territory reps bisa self-service monitor performa outlet tanpa request data manual.")
    c.drawString(M_LEFT + 70, impact_y + 13, "Meningkatkan visibility & accountability program 5G di level outlet.")


def slide_scanner_sbp(c):
    """Slide 7: Scanner SBP"""
    draw_header_bar(c, "Product: Scanner SBP (ST Scanner)", "QR code scanner & field operations digitalization")

    y = PAGE_H - 85

    # Stack
    draw_card(c, M_LEFT, y - 30, CONTENT_W, 30, LIGHT_GRAY)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 10, y - 20, "Stack:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 50, y - 20, "React + Vite + Tailwind CSS + shadcn/ui + Sonner Toast + QR Scanner Library")

    # Features & Pages
    left_w = CONTENT_W * 0.48
    right_x = M_LEFT + CONTENT_W * 0.52

    feat_y = y - 60
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, feat_y, "Features:")

    features = [
        "QR Code scanning via camera",
        "Scan result list & history management",
        "Outlet data lookup & management",
        "Sales Force tracking per outlet",
        "Session-based export (CSV & Excel)",
        "QR preview modal for verification",
        "Bottom navigation for easy access",
        "Maps integration for outlet location",
    ]
    draw_bullet_list(c, M_LEFT, feat_y - 18, features, font_size=9, spacing=15, max_width=left_w)

    # Pages
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(right_x, feat_y, "App Structure:")

    pages = [
        ("HomePage", "Dashboard utama, overview status"),
        ("ScanPage", "QR scanner dengan camera access"),
        ("OutletPage", "Daftar & detail outlet"),
        ("SalesForcePage", "Tracking sales force per area"),
    ]

    py = feat_y - 18
    for page, desc in pages:
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(RED)
        c.drawString(right_x + 10, py, page)
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        c.drawString(right_x + 10, py - 14, desc)
        py -= 34

    # Impact
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 45, LIGHT_GREEN, GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GREEN)
    c.drawString(M_LEFT + 15, impact_y + 28, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 28, "Digitalisasi proses scan & tracking di lapangan - sebelumnya manual paper-based.")
    c.drawString(M_LEFT + 70, impact_y + 13, "Export data ke CSV/Excel untuk reporting & analisis lebih lanjut.")


def slide_bola_gembira(c):
    """Slide 8: Bola Gembira Microsite"""
    draw_header_bar(c, "Product: Bola Gembira Microsite", "Campaign landing page for MaxStream Bola Gembira")

    y = PAGE_H - 85

    # Stack
    draw_card(c, M_LEFT, y - 30, CONTENT_W, 30, LIGHT_GRAY)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(RED)
    c.drawString(M_LEFT + 10, y - 20, "Stack:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 50, y - 20, "React + TypeScript + Vite + Tailwind CSS + Lucide Icons + Web Share API")

    left_w = CONTENT_W * 0.48
    right_x = M_LEFT + CONTENT_W * 0.52

    feat_y = y - 60
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, feat_y, "Features:")

    features = [
        "Linktree-style one-page microsite",
        "Install MaxStream app link (direct Play Store)",
        "Cara beli paket multi-channel:",
        "  - MyTelkomsel, UMB (*363*100#), Outlet",
        "Cara aktivasi multi-method:",
        "  - Kartu Perdana, Digipos, MyTelkomsel, IndiHome",
        "Paket data promo link (tsel.id/superseru)",
        "Web Share API integration",
        "Mobile-first responsive design",
    ]
    draw_bullet_list(c, M_LEFT, feat_y - 18, features, font_size=9, spacing=14, max_width=left_w)

    # Design highlights
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(right_x, feat_y, "Design Approach:")

    design = [
        "Mobile-first (max-width: 448px container)",
        "Gradient cards with icons for each section",
        "Dropdown cards for multi-step content",
        "Image galleries for activation guides",
        "Step-by-step numbered instructions",
        "Share toast notification",
        "Clean typography & consistent spacing",
    ]
    draw_bullet_list(c, right_x, feat_y - 18, design, font_size=9, spacing=14,
                    bullet_color=BLUE, max_width=CONTENT_W * 0.48)

    # Impact
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 45, LIGHT_GREEN, GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GREEN)
    c.drawString(M_LEFT + 15, impact_y + 28, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 28, "Satu link untuk semua info campaign - mempermudah distribusi ke field & customer.")
    c.drawString(M_LEFT + 70, impact_y + 13, "Mendukung campaign MaxStream Bola Gembira di seluruh region Eastern Jabotabek.")


def slide_showcase_dashboard(c):
    """Showcase: Dashboard OneDirection Screenshots"""
    draw_header_bar(c, "Showcase: Dashboard OneDirection", "Screenshots dari dashboard yang sudah di-deploy dan digunakan tim territory")

    y = PAGE_H - 75
    img_dir = os.path.join(os.path.dirname(OUTPUT_DIR), "public")

    images = [
        (os.path.join(img_dir, "dashboard_summary.png"), "Summary View"),
        (os.path.join(img_dir, "dashboard_bbpack_daily.png"), "BB Pack Daily Trend"),
        (os.path.join(img_dir, "dashboard_dls.png"), "Digital Lifestyle (DLS)"),
        (os.path.join(img_dir, "dashboard_dls_bogem.png"), "DLS Bola Gembira"),
    ]

    # 2x2 grid
    gap = 12
    img_w = (CONTENT_W - gap) / 2
    img_h = (y - M_BOTTOM - 30 - gap) / 2

    for i, (img_path, label) in enumerate(images):
        col = i % 2
        row = i // 2
        ix = M_LEFT + col * (img_w + gap)
        iy = y - row * (img_h + gap + 16) - img_h

        if os.path.exists(img_path):
            # Border
            c.setStrokeColor(HexColor("#E0E0E0"))
            c.setLineWidth(1)
            c.roundRect(ix - 2, iy - 2, img_w + 4, img_h + 4, 6, fill=0, stroke=1)
            # Image
            c.drawImage(img_path, ix, iy, width=img_w, height=img_h,
                       preserveAspectRatio=True, anchor='c', mask='auto')

        # Label
        c.setFont("Helvetica", 8)
        c.setFillColor(DARK_GRAY)
        c.drawCentredString(ix + img_w / 2, iy - 12, label)


def slide_showcase_webapps(c):
    """Showcase: Web Apps Screenshots"""
    draw_header_bar(c, "Showcase: Web Applications", "Screenshots dari 3 web app React yang sudah di-deploy")

    y = PAGE_H - 75
    img_dir = os.path.join(os.path.dirname(OUTPUT_DIR), "public")

    images = [
        (os.path.join(img_dir, "ro5e_site.png"), "RO5E 5G Dashboard"),
        (os.path.join(img_dir, "tsel_scanner_site.png"), "Scanner SBP"),
        (os.path.join(img_dir, "bogem_site.png"), "Bola Gembira Microsite"),
    ]

    # 3 columns
    gap = 15
    img_w = (CONTENT_W - gap * 2) / 3
    img_h = y - M_BOTTOM - 30

    for i, (img_path, label) in enumerate(images):
        ix = M_LEFT + i * (img_w + gap)
        iy = y - img_h

        if os.path.exists(img_path):
            # Border
            c.setStrokeColor(HexColor("#E0E0E0"))
            c.setLineWidth(1)
            c.roundRect(ix - 2, iy - 2, img_w + 4, img_h + 4, 6, fill=0, stroke=1)
            # Image
            c.drawImage(img_path, ix, iy, width=img_w, height=img_h,
                       preserveAspectRatio=True, anchor='c', mask='auto')

        # Label
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(DARK_GRAY)
        c.drawCentredString(ix + img_w / 2, iy - 14, label)


def slide_campaign(c):
    """Slide 9: Campaign & Digital Marketing"""
    draw_header_bar(c, "Campaign & Digital Marketing Support", "Meta Ads, MyAds, audience targeting & performance reporting")

    y = PAGE_H - 85
    left_w = CONTENT_W * 0.48
    right_x = M_LEFT + CONTENT_W * 0.52

    # Campaign Management
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(RED)
    c.drawString(M_LEFT, y, "Campaign Management")

    campaign = [
        "Meta Ads management untuk Telkomsel Eastern",
        "MyAds campaign creation & monitoring",
        "Campaign performance reporting (weekly/monthly)",
        "Invoice tracking & budget management",
        "A/B testing audience segments",
        "Content creation (Instagram posts, decks)",
    ]
    draw_bullet_list(c, M_LEFT, y - 20, campaign, font_size=9, spacing=15, max_width=left_w)

    # Audience Targeting
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(BLUE)
    c.drawString(right_x, y, "Audience Targeting (Big Data)")

    targeting = [
        "Whitelist generation dari Hadoop/Hive",
        "Profiling: ARPU, apps, device, CVM, geography",
        "30+ user dimensions for audience segmentation",
        "Targeted campaign list per territory",
    ]
    draw_bullet_list(c, right_x, y - 20, targeting, font_size=9, spacing=15,
                    bullet_color=BLUE, max_width=CONTENT_W * 0.48)

    # Digital Campaign Platforms
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(GREEN)
    c.drawString(M_LEFT, y - 145, "Digital Service Campaign Coverage:")

    platforms = [
        "Netflix", "Disney+", "Vidio", "Vision+", "Viu",
        "WeTV", "HBO", "iQiyi", "ShortMax", "YouTube Premium", "Amazon Prime"
    ]

    # Draw as tags
    tx = M_LEFT + 10
    ty = y - 168
    for platform in platforms:
        pw = c.stringWidth(platform, "Helvetica", 9) + 20
        if tx + pw > M_LEFT + CONTENT_W:
            tx = M_LEFT + 10
            ty -= 25
        draw_card(c, tx, ty, pw, 20, LIGHT_GRAY, MID_GRAY)
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK)
        c.drawCentredString(tx + pw / 2, ty + 6, platform)
        tx += pw + 8

    # Campaign tools
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, ty - 30, "Tools & Process:")

    tools = [
        "Data extraction: HiveQL queries per OTT platform",
        "Audience upload: WhiteList to MyAds / Meta Ads Manager",
        "Reporting: Performance deck (PPT) + Excel pivot",
        "Automation: clean_myads.py for data cleaning",
    ]
    draw_bullet_list(c, M_LEFT, ty - 48, tools, font_size=9, spacing=15, max_width=CONTENT_W)


def slide_workshop(c):
    """Slide: Workshop Campaign Meta Ads"""
    draw_header_bar(c, "Workshop: Campaign Meta Ads", "Knowledge sharing & capacity building untuk tim territory")

    y = PAGE_H - 90

    # Left column: description
    left_w = CONTENT_W * 0.42
    right_x = M_LEFT + CONTENT_W * 0.46
    right_w = CONTENT_W * 0.54

    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, y, "Workshop Campaign Meta Ads")

    c.setFont("Helvetica", 10)
    c.setFillColor(DARK_GRAY)
    c.drawString(M_LEFT, y - 20, "Telkomsel Eastern Jabotabek")

    # Divider
    c.setStrokeColor(HexColor("#E0E0E0"))
    c.setLineWidth(1)
    c.line(M_LEFT, y - 32, M_LEFT + left_w, y - 32)

    # Description
    desc_lines = [
        "Menginisiasi dan memimpin workshop",
        "Campaign Meta Ads untuk tim territory",
        "di Telkomsel Eastern Jabotabek.",
        "",
        "Workshop ini bertujuan untuk:",
    ]

    dy = y - 50
    for line in desc_lines:
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        c.drawString(M_LEFT, dy, line)
        dy -= 14

    # Workshop objectives
    objectives = [
        "Membekali tim territory dengan skill",
        "mengelola campaign Meta Ads secara mandiri",
        "Sharing best practice targeting &",
        "audience segmentation dari big data",
        "Hands-on practice: setup campaign,",
        "audience upload, & performance monitoring",
        "Meningkatkan efektivitas campaign",
        "digital di level territory",
    ]
    draw_bullet_list(c, M_LEFT, dy - 5, objectives, font_size=9, spacing=14, max_width=left_w - 10)

    # Impact box at bottom
    impact_y = M_BOTTOM
    draw_card(c, M_LEFT, impact_y, CONTENT_W, 50, LIGHT_GREEN, GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GREEN)
    c.drawString(M_LEFT + 15, impact_y + 32, "Impact:")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK)
    c.drawString(M_LEFT + 70, impact_y + 32, "Tim territory mampu menjalankan campaign Meta Ads secara mandiri dengan pemahaman yang lebih baik.")
    c.drawString(M_LEFT + 70, impact_y + 17, "Menunjukkan leadership & inisiatif dalam knowledge sharing di lingkungan kerja.")

    # Right column: photo
    img_path = os.path.join(OUTPUT_DIR, "koordinasi_campaign.png")
    if os.path.exists(img_path):
        img = ImageReader(img_path)
        img_w_orig, img_h_orig = img.getSize()
        # Fit image in right column area
        available_h = y + 10 - (impact_y + 60)
        available_w = right_w
        # Maintain aspect ratio
        scale = min(available_w / img_w_orig, available_h / img_h_orig)
        img_w = img_w_orig * scale
        img_h = img_h_orig * scale
        # Center in available area
        img_x = right_x + (available_w - img_w) / 2
        img_y = impact_y + 60 + (available_h - img_h) / 2

        # Shadow/border
        c.setStrokeColor(HexColor("#E0E0E0"))
        c.setLineWidth(1)
        c.roundRect(img_x - 3, img_y - 3, img_w + 6, img_h + 6, 6, fill=0, stroke=1)

        c.drawImage(img_path, img_x, img_y, width=img_w, height=img_h,
                   preserveAspectRatio=True, mask='auto')


def slide_data_expertise(c):
    """Slide 10: Data Query & Analysis"""
    draw_header_bar(c, "Data Query & Analysis Expertise", "200+ SQL queries across multiple business domains")

    y = PAGE_H - 85

    # Domains grid
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, y, "Analysis Domains:")

    domains = [
        ("Revenue Analysis", "L1 breakdown (BB, Voice, DLS, SMS)\nBAU vs NS segmentation\nMoM & YoY comparison", RED),
        ("Cohort Analysis", "BB forward/backward cohort\nCVM taker retention\nPackage migration tracking", BLUE),
        ("User Profiling", "ARPU, LOS, DRGB segmentation\nDevice & network capability\nApp usage & banking profile", GREEN),
        ("Campaign Analytics", "Taker analysis per campaign\nRenewal & churn tracking\nDigital service penetration", HexColor("#FF6F00")),
        ("Market Share", "Mobile, Household, Youth\nBranch & region comparison\nMonthly trend analysis", HexColor("#7B1FA2")),
        ("CVM Performance", "CVM revenue contribution\nModern channel tracking\nSakti/Seru package analysis", DARK_RED),
    ]

    col_w = (CONTENT_W - 20) / 3
    row_h = 82

    for i, (title, desc, color) in enumerate(domains):
        col = i % 3
        row = i // 3
        dx = M_LEFT + col * (col_w + 10)
        dy = y - 25 - row * (row_h + 15) - row_h

        draw_card(c, dx, dy, col_w, row_h, WHITE, HexColor("#E0E0E0"))
        c.setFillColor(color)
        c.rect(dx, dy + row_h - 5, col_w, 5, fill=1, stroke=0)

        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(color)
        c.drawString(dx + 10, dy + row_h - 22, title)

        c.setFont("Helvetica", 8)
        c.setFillColor(DARK_GRAY)
        desc_lines = desc.split("\n")
        dly = dy + row_h - 36
        for dl in desc_lines:
            c.drawString(dx + 10, dly, dl)
            dly -= 10

    # Tools & Tech
    tools_y = y - 25 - 2 * (row_h + 15) - 25
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(DARK)
    c.drawString(M_LEFT, tools_y, "Technical Tools:")

    tech_tags = [
        ("HiveQL / Beeline", RED),
        ("MySQL", BLUE),
        ("Bash Scripting", GREEN),
        ("Python", HexColor("#FF6F00")),
        ("Excel / Pivot", MID_GRAY),
        ("SSH / SCP", DARK2),
        ("gzip Pipeline", HexColor("#7B1FA2")),
        ("Cron Jobs", DARK_RED),
    ]

    tx = M_LEFT + 10
    ty = tools_y - 30
    for tag, color in tech_tags:
        tw = c.stringWidth(tag, "Helvetica-Bold", 9) + 20
        draw_card(c, tx, ty, tw, 22, color)
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(WHITE)
        c.drawCentredString(tx + tw / 2, ty + 7, tag)
        tx += tw + 8


def slide_tech_skills(c):
    """Slide 11: Technical Skills Summary"""
    draw_header_bar(c, "Technical Skills Summary", "Full-stack development & data engineering capabilities")

    y = PAGE_H - 85

    categories = [
        ("Frontend Development", [
            ("React", "3+ thn"), ("TypeScript", "2+ thn"), ("Tailwind CSS", "3+ thn"),
            ("Vite", "2+ thn"), ("Laravel Blade", "2+ thn"), ("HTML/CSS", "4+ thn"),
        ], RED),
        ("Backend & Database", [
            ("Laravel (PHP)", "2+ thn"), ("MySQL", "3+ thn"), ("Node.js", "1+ thn"),
            ("REST API", "3+ thn"), ("LDAP Auth", "1+ thn"),
        ], BLUE),
        ("Data Engineering", [
            ("HiveQL", "2+ thn"), ("Hadoop/Beeline", "2+ thn"), ("SQL (Complex)", "3+ thn"),
            ("ETL Pipeline", "2+ thn"), ("Bash Scripting", "2+ thn"),
        ], GREEN),
        ("Tools & Platform", [
            ("Git", "3+ thn"), ("Meta Ads", "1+ thn"), ("MyAds", "1+ thn"),
            ("Figma", "2+ thn"), ("Google Analytics", "1+ thn"),
        ], HexColor("#FF6F00")),
    ]

    col_w = (CONTENT_W - 30) / 2
    row_h = 185

    for i, (cat_title, skills, color) in enumerate(categories):
        col = i % 2
        row = i // 2
        cx = M_LEFT + col * (col_w + 30)
        cy = y - row * (row_h + 20)

        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(color)
        c.drawString(cx, cy, cat_title)

        sy = cy - 22
        for skill, years in skills:
            c.setFont("Helvetica", 9)
            c.setFillColor(DARK_GRAY)
            c.drawString(cx + 5, sy, skill)

            # Years badge
            badge_text = years
            badge_w = c.stringWidth(badge_text, "Helvetica-Bold", 8) + 14
            badge_x = cx + col_w - badge_w - 5
            c.setFillColor(color)
            c.roundRect(badge_x, sy - 3, badge_w, 16, 8, fill=1, stroke=0)
            c.setFont("Helvetica-Bold", 8)
            c.setFillColor(WHITE)
            c.drawCentredString(badge_x + badge_w / 2, sy + 1, badge_text)

            sy -= 22


def slide_beyond_telkomsel(c):
    """Slide 12: Beyond Telkomsel"""
    draw_header_bar(c, "Beyond Telkomsel: Entrepreneurship & Teaching", "Leadership, initiative, dan business acumen")

    y = PAGE_H - 85

    # Three columns
    col_w = (CONTENT_W - 20) / 3

    # Teras Brew
    bx = M_LEFT
    draw_card(c, bx, y - 255, col_w, 250, WHITE, HexColor("#E0E0E0"))
    c.setFillColor(HexColor("#795548"))
    c.rect(bx, y - 5 - 5, col_w, 5, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(HexColor("#795548"))
    c.drawString(bx + 12, y - 25, "Teras Brew & Roastery")

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(DARK)
    c.drawString(bx + 12, y - 45, "Co-Founder | Coffee Business")

    brew_items = [
        "Bisnis kopi dari hulu ke hilir",
        "Registered: NIB, HAKI, UMK",
        "Product: roasted beans, manual brew",
        "Marketing: social media & branding",
        "Finance: invoice & order management",
        "Website: teras brew online presence",
        "Client: Telkomsel, wedding events",
    ]
    draw_bullet_list(c, bx + 5, y - 68, brew_items, font_size=8, spacing=14,
                    bullet_color=HexColor("#795548"), max_width=col_w - 20)

    # Teras Labs
    lx = M_LEFT + col_w + 10
    draw_card(c, lx, y - 255, col_w, 250, WHITE, HexColor("#E0E0E0"))
    c.setFillColor(BLUE)
    c.rect(lx, y - 5 - 5, col_w, 5, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(BLUE)
    c.drawString(lx + 12, y - 25, "Teras Labs")

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(DARK)
    c.drawString(lx + 12, y - 45, "Co-Founder | Software House")

    labs_items = [
        "Revenue: > 3 digit juta (cumulative)",
        "10+ client projects delivered",
        "Services: web dev, mobile app, design",
        "Clients: corporate & SME",
        "Team management & project delivery",
        "Product: Teras POS (Point of Sale)",
        "Partnership: MAKA Group & others",
    ]
    draw_bullet_list(c, lx + 5, y - 68, labs_items, font_size=8, spacing=14,
                    bullet_color=BLUE, max_width=col_w - 20)

    # Teaching
    tx_col = M_LEFT + 2 * (col_w + 10)
    draw_card(c, tx_col, y - 255, col_w, 250, WHITE, HexColor("#E0E0E0"))
    c.setFillColor(GREEN)
    c.rect(tx_col, y - 5 - 5, col_w, 5, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(GREEN)
    c.drawString(tx_col + 12, y - 25, "Teaching & Content")

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(DARK)
    c.drawString(tx_col + 12, y - 45, "Educator | Content Creator")

    teach_items = [
        "Workshop SMKN 8 Jakarta:",
        "  Day 1: Website Development",
        "  Day 2: Product Design",
        "Active content creator",
        "Educational tech content",
        "Mentoring junior developers",
        "Community knowledge sharing",
    ]
    draw_bullet_list(c, tx_col + 5, y - 68, teach_items, font_size=8, spacing=14,
                    bullet_color=GREEN, max_width=col_w - 20)

    # Bottom message
    c.setFont("Helvetica-Oblique", 10)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_W / 2, 45, "Entrepreneurship & teaching menunjukkan leadership, initiative, dan kemampuan")
    c.drawCentredString(PAGE_W / 2, 30, "membangun sesuatu dari nol - skills yang transferable ke peran di Telkomsel.")


def slide_impact_summary(c):
    """Slide 13: Impact Summary"""
    # Dark background
    c.setFillColor(DARK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Red bar top
    c.setFillColor(RED)
    c.rect(0, PAGE_H - 8, PAGE_W, 8, fill=1, stroke=0)

    # Title
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(WHITE)
    c.drawCentredString(PAGE_W / 2, PAGE_H - 60, "Impact Summary")

    c.setFont("Helvetica", 12)
    c.setFillColor(MID_GRAY)
    c.drawCentredString(PAGE_W / 2, PAGE_H - 82, "Kontribusi nyata selama di Telkomsel Eastern Jabotabek")

    # Stats grid (2 rows x 3 cols)
    stats = [
        ("4", "Products Built\n& Deployed", RED),
        ("20+", "Automation\nScripts", GOLD),
        ("200+", "SQL Queries\nWritten", BLUE),
        ("40+", "Dashboard\nPages", GREEN),
        ("10+", "Territory Managers\nServed", HexColor("#FF6F00")),
        ("~90%", "Time Saved\n(2-3 jam -> 10-15 min)", HexColor("#AB47BC")),
    ]

    card_w = (CONTENT_W - 40) / 3
    card_h = 120
    gap = 20

    for i, (num, label, color) in enumerate(stats):
        col = i % 3
        row = i // 3
        cx = M_LEFT + col * (card_w + gap)
        cy = PAGE_H - 130 - row * (card_h + gap) - card_h

        # Card with colored border
        c.setFillColor(HexColor("#1E2A3A"))
        c.setStrokeColor(color)
        c.setLineWidth(2)
        c.roundRect(cx, cy, card_w, card_h, 10, fill=1, stroke=1)

        # Number
        c.setFont("Helvetica-Bold", 36)
        c.setFillColor(color)
        c.drawCentredString(cx + card_w / 2, cy + card_h - 50, num)

        # Label
        c.setFont("Helvetica", 10)
        c.setFillColor(HexColor("#BDBDBD"))
        label_lines = label.split("\n")
        ly = cy + card_h - 70
        for ll in label_lines:
            c.drawCentredString(cx + card_w / 2, ly, ll)
            ly -= 14

    # Bottom tagline
    c.setFont("Helvetica-Oblique", 12)
    c.setFillColor(GOLD)
    c.drawCentredString(PAGE_W / 2, 50, '"From 2-3 hours manual processing to 10-15 minutes automated pipeline"')


def slide_why_organic(c):
    """Slide 14: Why Organic/Kartap"""
    draw_header_bar(c, "Why Organic / Kartap?", "Alasan konversi ke karyawan tetap Telkomsel")

    y = PAGE_H - 90

    reasons = [
        {
            "title": "Deep Domain Knowledge",
            "desc": "1-2 tahun memahami ekosistem bisnis Telkomsel Eastern Jabotabek - dari level data infrastructure "
                    "sampai business metrics. Sudah familiar dengan tools, proses, dan stakeholders.",
            "color": RED,
        },
        {
            "title": "Proven Track Record",
            "desc": "4 produk internal sudah built & deployed, 20+ automation scripts berjalan daily, "
                    "200+ queries serving kebutuhan 10+ territory managers. Kontribusi nyata yang terukur.",
            "color": BLUE,
        },
        {
            "title": "Efficiency-First Mindset",
            "desc": "Selalu mencari cara untuk mengotomasi proses manual. Data extraction dari 2-3 jam manual "
                    "menjadi 10-15 menit via automated pipeline - penghematan ~90% waktu per task.",
            "color": GREEN,
        },
        {
            "title": "Full-Stack Capability",
            "desc": "Tidak hanya bisa query data, tapi juga build dashboard, web apps, dan automation pipeline. "
                    "Kombinasi langka: data engineering + frontend development + business understanding.",
            "color": HexColor("#FF6F00"),
        },
        {
            "title": "Long-Term Commitment",
            "desc": "Ingin grow bersama Telkomsel. Dengan status kartap, bisa berkontribusi lebih besar "
                    "untuk pengembangan tools & efficiency di level regional maupun nasional.",
            "color": HexColor("#7B1FA2"),
        },
    ]

    reason_h = 70
    for i, reason in enumerate(reasons):
        ry = y - i * (reason_h + 10)
        draw_card(c, M_LEFT, ry - reason_h, CONTENT_W, reason_h, WHITE, HexColor("#E0E0E0"))

        # Color accent
        c.setFillColor(reason["color"])
        c.rect(M_LEFT, ry - reason_h, 6, reason_h, fill=1, stroke=0)

        # Number circle
        c.setFillColor(reason["color"])
        c.circle(M_LEFT + 30, ry - reason_h / 2, 14, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 12)
        c.setFillColor(WHITE)
        c.drawCentredString(M_LEFT + 30, ry - reason_h / 2 - 5, str(i + 1))

        # Title
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(reason["color"])
        c.drawString(M_LEFT + 55, ry - 18, reason["title"])

        # Description (wrap)
        c.setFont("Helvetica", 9)
        c.setFillColor(DARK_GRAY)
        desc = reason["desc"]
        words = desc.split()
        lines = []
        current = ""
        for w in words:
            test = current + " " + w if current else w
            if c.stringWidth(test, "Helvetica", 9) < CONTENT_W - 70:
                current = test
            else:
                lines.append(current)
                current = w
        if current:
            lines.append(current)

        dly = ry - 34
        for line in lines:
            c.drawString(M_LEFT + 55, dly, line)
            dly -= 13


def slide_thank_you(c):
    """Slide 15: Thank You"""
    # Dark background
    c.setFillColor(DARK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Red bar
    c.setFillColor(RED)
    c.rect(0, PAGE_H - 8, PAGE_W, 8, fill=1, stroke=0)

    # Decorative circles (semi-transparent red)
    c.setFillColor(Color(0.93, 0.11, 0.15, alpha=0.08))
    c.circle(100, 100, 150, fill=1, stroke=0)
    c.circle(PAGE_W - 100, PAGE_H - 100, 100, fill=1, stroke=0)

    # Thank you
    c.setFont("Helvetica-Bold", 42)
    c.setFillColor(WHITE)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 + 60, "Thank You")

    # Red line
    c.setStrokeColor(RED)
    c.setLineWidth(3)
    c.line(PAGE_W / 2 - 60, PAGE_H / 2 + 40, PAGE_W / 2 + 60, PAGE_H / 2 + 40)

    # Name
    c.setFont("Helvetica-Bold", 18)
    c.setFillColor(WHITE)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2, "Muhammad Hafiz Hisbullah")

    # Role
    c.setFont("Helvetica", 12)
    c.setFillColor(MID_GRAY)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 - 25, "Operational Support & Product Engineer")
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 - 42, "Telkomsel Eastern Jabotabek")

    # Tagline
    c.setFont("Helvetica-Oblique", 13)
    c.setFillColor(GOLD)
    c.drawCentredString(PAGE_W / 2, PAGE_H / 2 - 85, '"Let\'s build the future of Telkomsel together."')

    # Bottom
    c.setFont("Helvetica", 9)
    c.setFillColor(MID_GRAY)
    c.drawCentredString(PAGE_W / 2, 40, "Portfolio & Impact Presentation | 2025-2026")


# ============== MAIN ==============

def main():
    total_slides = 19

    c = canvas.Canvas(OUTPUT_FILE, pagesize=landscape(A4))
    c.setTitle("Portfolio - Muhammad Hafiz Hisbullah - Telkomsel")
    c.setAuthor("Muhammad Hafiz Hisbullah")
    c.setSubject("Portfolio & Impact Presentation for Telkomsel Organic Recruitment")

    slides = [
        slide_cover,
        slide_profile,
        slide_overview,
        slide_automation_overview,
        slide_automation_detail,
        slide_dashboard_onedirection,
        slide_rose_5g,
        slide_scanner_sbp,
        slide_bola_gembira,
        slide_showcase_dashboard,
        slide_showcase_webapps,
        slide_campaign,
        slide_workshop,
        slide_data_expertise,
        slide_tech_skills,
        slide_beyond_telkomsel,
        slide_impact_summary,
        slide_why_organic,
        slide_thank_you,
    ]

    for i, slide_fn in enumerate(slides):
        if i > 0:
            c.showPage()
        slide_fn(c)
        draw_slide_number(c, i + 1, total_slides)

    c.save()
    print(f"PDF generated: {OUTPUT_FILE}")
    print(f"Total slides: {total_slides}")


if __name__ == "__main__":
    main()
