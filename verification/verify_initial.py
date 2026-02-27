from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        # Open the local index.html
        path = os.path.abspath("index.html")
        page.goto(f"file://{path}")

        # Wait for preloader to fade
        print("Waiting for preloader to finish...")
        page.wait_for_selector("#preloader", state="hidden", timeout=15000)

        # Close tutorial if it's there
        try:
            print("Closing tutorial...")
            page.click("button:has-text('ابدأ الرحلة')", timeout=3000)
        except:
            print("Tutorial not found or already closed.")

        # 1. Hero and initial state
        page.screenshot(path="verification/initial_hero.png")

        # 2. Scroll to map and interact
        print("Scrolling to map...")
        page.locator("#hero-map").scroll_into_view_if_needed()
        page.wait_for_timeout(2000) # Wait for tablet animation

        # Toggle layer panel
        print("Clicking layer toggle...")
        btn_toggle = page.locator("#btn-layer-toggle")
        btn_toggle.scroll_into_view_if_needed()
        btn_toggle.click(force=True)

        # Wait for panel to be visible and stable
        panel = page.locator("#layer-panel")
        page.wait_for_selector("#layer-panel:not(.hidden)", timeout=5000)
        page.wait_for_timeout(1000) # Wait for animation
        page.screenshot(path="verification/layer_panel.png")

        # Toggle sites and routes - using labels for better reliability if inputs are hidden
        print("Toggling sites and routes...")
        page.click("label:has-text('المواقع الأثرية الرئيسية')", force=True)
        page.click("label:has-text('طرق التجارة القديمة')", force=True)
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/map_layers_active.png")

        # Click a region (Luxor) - using force=True because HUD overlay might be 'on top'
        # even if it has pointer-events: none for its container
        print("Clicking Luxor region...")
        page.click("#luxor", force=True)
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/luxor_selected.png")

        # Scroll down to see progress bar
        page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/scrolled_progress.png")

        browser.close()

if __name__ == "__main__":
    run()
