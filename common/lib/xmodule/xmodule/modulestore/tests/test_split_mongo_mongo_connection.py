<<<<<<< HEAD
""" Test the behavior of split_mongo/MongoConnection """
=======
""" Test the behavior of split_mongo/MongoPersistenceBackend """
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


import unittest
from unittest.mock import patch

import pytest
from pymongo.errors import ConnectionFailure

from xmodule.exceptions import HeartbeatFailure
<<<<<<< HEAD
from xmodule.modulestore.split_mongo.mongo_connection import MongoConnection
=======
from xmodule.modulestore.split_mongo.mongo_connection import MongoPersistenceBackend
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class TestHeartbeatFailureException(unittest.TestCase):
    """ Test that a heartbeat failure is thrown at the appropriate times """

    @patch('pymongo.MongoClient')
    @patch('pymongo.database.Database')
    def test_heartbeat_raises_exception_when_connection_alive_is_false(self, *calls):
        # pylint: disable=W0613
        with patch('mongodb_proxy.MongoProxy') as mock_proxy:
            mock_proxy.return_value.admin.command.side_effect = ConnectionFailure('Test')
<<<<<<< HEAD
            useless_conn = MongoConnection('useless', 'useless', 'useless')
=======
            useless_conn = MongoPersistenceBackend('useless', 'useless', 'useless')
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

            with pytest.raises(HeartbeatFailure):
                useless_conn.heartbeat()
