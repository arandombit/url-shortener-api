sleep 5

echo "it should serve application..."
if curl \
  --header 'Content-Type: application/json' \
  --request POST \
  --data '{ "url": "https://www.google.com/" }' \
  http://localhost:8080 \
  | grep -e "http://localhost:8080";
  then
    printf "\n- application loaded successfully\n"
    exit 0
  else
    printf "\n- application failed to load\n"
    exit 1
fi
