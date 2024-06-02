from django.shortcuts import render

    # """
    # Render the 'frontend/index.html' template for the given request.
    # Args:
    #     request (HttpRequest): The HTTP request object.
    #     *args: Variable length argument list.
    #     **kwargs: Arbitrary keyword arguments.
    # Returns:
    #     HttpResponse: The rendered HTML response.
    # """
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')