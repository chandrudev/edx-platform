"""
Test utilities for waffle utilities.
"""

<<<<<<< HEAD
# Can be used with FilteredQueryCountMixin.assertNumQueries() to blacklist
# waffle tables. For example:
#   QUERY_COUNT_TABLE_BLACKLIST = WAFFLE_TABLES
#   with self.assertNumQueries(6, table_blacklist=QUERY_COUNT_TABLE_BLACKLIST):
WAFFLE_TABLES = [
    "waffle_utils_waffleflagcourseoverridemodel",
=======
# Can be used with FilteredQueryCountMixin.assertNumQueries() to ignore
# waffle tables. For example:
#   QUERY_COUNT_TABLE_IGNORELIST = WAFFLE_TABLES
#   with self.assertNumQueries(6, table_ignorelist=QUERY_COUNT_TABLE_IGNORELIST):
WAFFLE_TABLES = [
    "waffle_utils_waffleflagcourseoverridemodel",
    "waffle_utils_waffleflagorgoverridemodel",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "waffle_flag",
    "waffle_switch",
    "waffle_sample",
]
