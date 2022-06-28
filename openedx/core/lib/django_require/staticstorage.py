"""
:class:`~django_require.staticstorage.OptimizedCachedRequireJsStorage`
"""

<<<<<<< HEAD
from pipeline.storage import PipelineCachedStorage
=======
from pipeline.storage import PipelineManifestStorage
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from require.storage import OptimizedFilesMixin

from openedx.core.storage import PipelineForgivingMixin


<<<<<<< HEAD
class OptimizedCachedRequireJsStorage(OptimizedFilesMixin, PipelineForgivingMixin, PipelineCachedStorage):
=======
class OptimizedCachedRequireJsStorage(OptimizedFilesMixin, PipelineForgivingMixin, PipelineManifestStorage):
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Custom storage backend that is used by Django-require.
    """
    pass  # lint-amnesty, pylint: disable=unnecessary-pass
