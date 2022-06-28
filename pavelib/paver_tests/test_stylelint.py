"""
Tests for Paver's Stylelint tasks.
"""

from unittest.mock import MagicMock, patch

import pytest
import ddt
from paver.easy import call_task

from .utils import PaverTestCase


@ddt.ddt
class TestPaverStylelint(PaverTestCase):
    """
    Tests for Paver's Stylelint tasks.
    """
    @ddt.data(
<<<<<<< HEAD
        [0, False],
        [99, False],
        [100, True],
    )
    @ddt.unpack
    def test_run_stylelint(self, violations_limit, should_pass):
        """
        Verify that the quality task fails with Stylelint violations.
        """
        _mock_stylelint_violations = MagicMock(return_value=100)
        with patch('pavelib.quality._get_stylelint_violations', _mock_stylelint_violations):
            if should_pass:
                call_task('pavelib.quality.run_stylelint', options={"limit": violations_limit})
            else:
                with pytest.raises(SystemExit):
                    call_task('pavelib.quality.run_stylelint', options={"limit": violations_limit})
=======
        [False],
        [True],
    )
    @ddt.unpack
    def test_run_stylelint(self, should_pass):
        """
        Verify that the quality task fails with Stylelint violations.
        """
        if should_pass:
            _mock_stylelint_violations = MagicMock(return_value=0)
            with patch('pavelib.quality._get_stylelint_violations', _mock_stylelint_violations):
                call_task('pavelib.quality.run_stylelint')
        else:
            _mock_stylelint_violations = MagicMock(return_value=100)
            with patch('pavelib.quality._get_stylelint_violations', _mock_stylelint_violations):
                with pytest.raises(SystemExit):
                    call_task('pavelib.quality.run_stylelint')
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
