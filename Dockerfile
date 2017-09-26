FROM nginx
COPY build /usr/share/nginx/html

# Then run the following 2 lines
# sudo docker build --no-cache -t my-ui .
# sudo docker run -ti --name web my-ui


# Userbame: spotin@admin
# password: SPotinAdmin$%45
# printf "USER:$(openssl passwd -crypt SPotin@dmin"USER:$(openssl passwd -crypt SPotin@dmin134)\n"
# docker run -d -e HTPASSWD='spotin@admin:7kXNSn0b2oYjg' -e FORWARD_PORT=80 --link web:web -p 8080:80 --name auth beevelop/nginx-basic-auth

# No proxy: docker run --name react-server --rm -it -p 80:80 -v "$PWD"/build/:/usr/share/nginx/html:ro nginx