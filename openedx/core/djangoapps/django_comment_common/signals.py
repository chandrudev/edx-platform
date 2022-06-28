# pylint: disable=invalid-name
"""Signals related to the comments service."""


from django.dispatch import Signal

# Same providing_args=['user', 'post'] for all following signals.
thread_created = Signal()
thread_edited = Signal()
thread_voted = Signal()
thread_deleted = Signal()
thread_followed = Signal()
thread_unfollowed = Signal()
<<<<<<< HEAD
=======
thread_flagged = Signal()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
comment_created = Signal()
comment_edited = Signal()
comment_voted = Signal()
comment_deleted = Signal()
comment_endorsed = Signal()
<<<<<<< HEAD
=======
comment_flagged = Signal()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
