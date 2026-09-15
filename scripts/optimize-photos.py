"""批次重命名與壓縮照片：subject-area-number.jpg + 1920px / Q80 JPEG。"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "src" / "assets"

RENAMES = {
    # 來源檔名 -> subject-area-number.jpg
    "hero/night-skyline.jpg":                "hero/wanggaoliao-skyline-night-1.jpg",
    "nearby/rainbow-village.jpg":            "nearby/rainbow-village-courtyard-1.jpg",
    "nearby/zhuifen-station.jpg":            "nearby/zhuifen-station-platform-1.jpg",
    "nearby/zhigao-trail.jpg":               "nearby/zhigao-trail-elevated-1.jpg",
    "nearby/jukuiju.jpg":                    "nearby/jukuigu-courtyard-1.jpg",
    "official/wanggaoliao-night.jpg":        "official/wanggaoliao-panorama-night-1.jpg",
    "official/wanggaoliao-lighting.jpg":     "official/wanggaoliao-lighting-night-1.jpg",
    "official/wanggaoliao-panorama.jpg":     "official/wanggaoliao-skyline-night-1.jpg",
    "official/wanggaoliao-walkway.jpg":      "official/wanggaoliao-walkway-detail-1.jpg",
    "park/flak-tower.jpg":                   "park/wanggaoliao-fortress-detail-1.jpg",
    "park/park-2025.jpg":                    "park/wanggaoliao-park-overview-1.jpg",
    "park/park-lawn.jpg":                    "park/wanggaoliao-lawn-detail-1.jpg",
    "park/park-plaza.jpg":                   "park/wanggaoliao-plaza-overview-1.jpg",
    "park/park-steps.jpg":                   "park/wanggaoliao-stairs-detail-1.jpg",
    "viewpoints/city-daytime.jpg":           "viewpoints/taichung-city-daytime-1.jpg",
    "viewpoints/lookout-southwest.jpg":      "viewpoints/wanggaoliao-lookout-sunset-1.jpg",
}

MAX_WIDTH = 1920
JPEG_QUALITY = 78


def optimize(src_path: Path, dst_path: Path) -> tuple[int, int]:
    with Image.open(src_path) as img:
        img = img.convert("RGB")
        original_w, original_h = img.size
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_size = (MAX_WIDTH, int(round(img.height * ratio)))
            img = img.resize(new_size, Image.LANCZOS)
        dst_path.parent.mkdir(parents=True, exist_ok=True)
        img.save(
            dst_path,
            "JPEG",
            quality=JPEG_QUALITY,
            optimize=True,
            progressive=True,
            subsampling=2,
        )
    return original_w, img.size


def main() -> None:
    total_in = total_out = 0
    for rel_old, rel_new in RENAMES.items():
        src = ROOT / rel_old
        dst = ROOT / rel_new
        if not src.exists():
            print(f"skip missing: {rel_old}")
            continue
        old_w, new_size = optimize(src, dst)
        old_size = src.stat().st_size
        new_size_b = dst.stat().st_size
        total_in += old_size
        total_out += new_size_b
        print(
            f"{rel_old} -> {rel_new} "
            f"({old_size//1024}KB->{new_size_b//1024}KB, {old_w}x{img_size_to_str(new_size)})"
        )
        if src != dst:
            src.unlink()
    print(f"---\n總計 {total_in//1024}KB -> {total_out//1024}KB ({(1-total_out/total_in)*100:.1f}% 縮減)")


def img_size_to_str(size):
    return f"{size[0]}x{size[1]}" if isinstance(size, tuple) else str(size)


if __name__ == "__main__":
    main()