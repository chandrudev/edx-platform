"""
Defines URLs for theming views.
"""
<<<<<<< HEAD


from django.conf.urls import url
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from django.urls import path

from . import helpers
from . import views

app_name = "openedx.core.djangoapps.theming"

urlpatterns = [
    path(
        "asset/<path:path>",
        views.themed_asset,
        name="openedx.theming.asset",
    ),
]

if helpers.is_comprehensive_theming_enabled():
    urlpatterns += [
<<<<<<< HEAD
        url(
            r"^admin",
            views.ThemingAdministrationFragmentView.as_view(),
            name="openedx.theming.update_theme_fragment_view",
        ),
=======
        path('admin', views.ThemingAdministrationFragmentView.as_view(),
             name="openedx.theming.update_theme_fragment_view",
             ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ]
