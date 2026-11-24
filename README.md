# All Calc

A free, MIT-licensed calculator dashboard for students, educators and everyday users. An early-stage project revived with a new, dependency-free implementation.

## Features
- Scientific expressions with operator precedence, powers, parentheses, trigonometry (degrees), logarithms and square roots.
- Percentage calculations, length conversion and linear equation solving.
- Responsive interface, dark mode and temporary calculation history.
- Local browser calculations without a server or account.

## Getting started
Clone this repository and serve it locally:
```sh
git clone https://github.com/Abduwr/all-calc.git
cd all-calc
python -m http.server 8000
```
Open http://localhost:8000 in your browser.

## Examples
| Expression | Result |
| --- | --- |
| 2+3*4 | 14 |
| sin(30) | 0.5 |
| sqrt(81) | 9 |
| 2^3^2 | 512 |

## Testing
With Node.js 20 or newer, run `node --test engine.test.mjs`.

## Project structure
- `index.html`: accessible form controls and calculator layout
- `style.css`: responsive styles
- `app.js`: browser interaction
- `engine.mjs`: calculation logic
- `engine.test.mjs`: regression tests

## Status and limitations
Early development; adoption metrics have not been established. Calculations use JavaScript floating-point arithmetic, so rounding errors are possible. Explicit multiplication is required (e.g. 2*pi). This is an educational tool, not a certified scientific or financial calculator.

See [ROADMAP.md](ROADMAP.md) and [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under [MIT](LICENSE).
