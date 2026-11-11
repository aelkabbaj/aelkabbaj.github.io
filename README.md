# aelkabbaj.github.io

Personal website of **Anass El Kabbaj**, FPGA & embedded systems engineer: **https://aelkabbaj.github.io**

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme. GitHub Actions builds and deploys the site to GitHub Pages on every push to `main`.

## Where things live

| What                                  | File                                    |
| ------------------------------------- | --------------------------------------- |
| Homepage bio                          | `_pages/about.md`                       |
| Resume page                           | `_data/cv.yml`                          |
| Resume PDF (written in Overleaf)      | `assets/pdf/Resume_Anass_EL_KABBAJ.pdf` |
| Social links (GitHub, LinkedIn, mail) | `_data/socials.yml`                     |
| Site settings                         | `_config.yml`                           |

## Updating the resume

1. Edit the resume in Overleaf and download the PDF.
2. Replace `assets/pdf/Resume_Anass_EL_KABBAJ.pdf`, keeping the same filename.
3. Update `_data/cv.yml` so the resume page matches the PDF.

## Running locally

```bash
docker compose pull && docker compose up
```

Then open http://localhost:8080.

## License

The al-folio theme is released under the MIT License; see [`LICENSE`](LICENSE).
