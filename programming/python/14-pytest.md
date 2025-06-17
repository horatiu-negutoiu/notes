# Python / Pytest

Steps to quickly get started using `pytest` in python:

1. Install `pytest`.
2. Create a `tests` folder with an `__init__.py`.
3. Create a file. It MUST start with `test_` (ex: `test_<sub-module-name>.py`).
4. Add test:

```python
import pytest


class TestPlaceholder:
    """
    A sample test used in absense of real tests (pytest fails without any tests).
    Remove this class when real tests are added.
    """

    @pytest.mark.parametrize(
        "input_one, input_two, expected",
        [
            (1, 1, 2),
        ],
    )
    def test_sample(self, input_one, input_two, expected) -> None:
        actual = input_one + input_two
        assert actual == expected
```

5. Run: `python -m pytest` or `poetry run python -m pytest` (if you're using poetry).
