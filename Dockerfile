# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the contents of the current directory (your website files)
# to the default Nginx web directory (/usr/share/nginx/html)


# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80


# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
