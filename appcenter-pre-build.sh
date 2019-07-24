
GOOGLE_SERVICES_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json

if [ -e "$GOOGLE_SERVICES_JSON_FILE" ]
then
    echo "Updating Google Json"
    echo "$GOOGLE_SERVICES_JSON" > $GOOGLE_SERVICES_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_SERVICES_JSON_FILE

    echo "File content:"
    cat $GOOGLE_SERVICES_JSON_FILE
fi
