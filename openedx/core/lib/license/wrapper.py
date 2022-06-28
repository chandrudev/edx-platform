"""
Code to wrap web fragments with a license.
"""


<<<<<<< HEAD
def wrap_with_license(block, view, frag, context):  # pylint: disable=unused-argument
=======
def wrap_with_license(block, view, frag, context, mako_service):  # pylint: disable=unused-argument
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    In the LMS, display the custom license underneath the XBlock.
    """
    license = getattr(block, "license", None)  # pylint: disable=redefined-builtin
    if license:
        context = {"license": license}
<<<<<<< HEAD
        frag.content += block.runtime.render_template('license_wrapper.html', context)
=======
        frag.content += mako_service.render_template('license_wrapper.html', context)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    return frag
