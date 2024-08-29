import requests

# Define the URL of the API endpoint
url = 'http://localhost:3000/check'

# Define the payload
payload = {
    'username': 'test',
    'password': 'test'
}

# Make a POST request to the API
response = requests.post(url, json=payload)

# Print the response
print(response.status_code)
print(response.text)