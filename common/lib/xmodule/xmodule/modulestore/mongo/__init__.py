"""
Provide names as exported by older mongo.py module
"""


from common.lib.xmodule.xmodule.modulestore.mongo.base import MongoKeyValueStore, MongoModuleStore
# Backwards compatibility for prod systems that refererence
# xmodule.modulestore.mongo.DraftMongoModuleStore
from common.lib.xmodule.xmodule.modulestore.mongo.draft import DraftModuleStore as DraftMongoModuleStore
