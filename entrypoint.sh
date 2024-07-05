ROOT_DIR=/app

# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $ROOT_DIR/.output/public/_nuxt/entry.*.js   
do
  echo "Processing $file ...";

  sed -i 's|e.public.API_AUTH_DOMAIN|'\"${API_AUTH_DOMAIN}\"'|g' $file 
  sed -i 's|e.public.API_PROTOCOL|'\"${API_PROTOCOL}\"'|g' $file 
  sed -i 's|e.public.API_PUBLIC_URL|'\"${API_PUBLIC_URL}\"'|g' $file  

done

node "/app/.output/server/index.mjs"