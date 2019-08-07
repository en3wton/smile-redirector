var parts = window.location.hostname.split("amazon.")
var extension = parts[parts.length - 1]
window.location.hostname= ("smile.amazon." + extension)