#!/usr/bin/env python3
# Exact 95(3) restore: preserve the original page, buttons, chat menu, and uploaded assets.
import base64, gzip, re
from pathlib import Path

INDEX = Path("index.html")
html = INDEX.read_text(encoding="utf-8")

m = re.search(r'const\s+B64\s*=\s*(["\'])([A-Za-z0-9+/=]+)\1', html, re.S)
if m:
    html = gzip.decompress(base64.b64decode(m.group(2))).decode("utf-8")

image_paths = [
    "assets/images/brand-logo.png",
    "assets/images/product-barley-canister.png",
    "assets/images/product-barliccino.png",
    "assets/images/product-fibrenergy.png",
    "assets/images/product-boost-coffee.png",
    "assets/images/product-beauty-collagen.png",
    "assets/images/product-fusion-coffee.png",
    "assets/images/product-barley-powder.png",
    "assets/images/product-barley-canister.png",
    "assets/images/wellness-barley-01.jpg",
    "assets/images/wellness-barley-02.jpg",
    "assets/images/wellness-barley-03.jpg",
    "assets/images/wellness-barley-04.jpg",
    "assets/images/intro-pack.png",
    "assets/images/affiliate-pack.png",
    "assets/images/story-01.jpg",
    "assets/images/story-02.jpg",
    "assets/images/story-03.jpg",
    "assets/images/story-04.jpg",
    "assets/images/story-05.jpg",
    "assets/images/testimonial-banner.png",
    "assets/images/hsg-poster-01.jpg",
    "assets/images/hsg-poster-01.jpg",
    "assets/images/hsg-poster-02.jpg",
    "assets/images/hsg-poster-03.jpg",
    "assets/images/hsg-poster-04.jpg",
    "assets/images/hsg-poster-05.jpg",
    "assets/images/hsg-poster-06.jpg",
]

i = 0
def replace_img(match):
    global i
    value = f'src="{image_paths[i]}"'
    i += 1
    return value

html = re.sub(r'src="data:image/[^;]+;base64,[^"]+"', replace_img, html)

j = 0
def replace_thumb(match):
    global j
    j += 1
    return f'data-image="assets/images/hsg-poster-{j:02d}.jpg"'

html = re.sub(r'data-image="data:image/[^;]+;base64,[^"]+"', replace_thumb, html)

video_paths = {
    "storyLocalVideo": "assets/videos/story-01.mp4",
    "storyLocalVideo2": "assets/videos/story-02.mp4",
    "storyLocalVideo3": "assets/videos/story-03.mp4",
    "storyLocalVideo4": "assets/videos/story-04.mp4",
    "storyLocalVideo5": "assets/videos/story-05.mp4",
    "wellnessTestimonyVideo": "assets/videos/wellness-testimony.mp4",
}
for name, path in video_paths.items():
    html, _ = re.subn(
        rf'(const\s+{re.escape(name)}\s*=\s*)"data:video/mp4;base64,[^"]+";',
        rf'\1"{path}";',
        html,
        flags=re.S,
    )

INDEX.write_text(html, encoding="utf-8")
Path("RESTORE_STATUS.txt").write_text(
    f"decoded={bool(m)}\nbytes={len(html)}\nimage_data_remaining={html.count('data:image')}\nvideo_data_remaining={html.count('data:video')}\nchat_fab_count={html.count('chat-fab')}\nimages_replaced={i}\nthumbnails_replaced={j}\n",
    encoding="utf-8",
)
print(Path("RESTORE_STATUS.txt").read_text())
