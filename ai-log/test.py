import csv
import random
import string

# Function to generate random usernames and passwords
def generate_username(base_username, count):
    return f"{base_username}{count}"

def generate_password():
    t = 'hi'
    return t

# Function to create CSV
def create_csv(filename, first_name, last_name, base_username, num_users):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        # Writing the header
        writer.writerow(['first_name', 'last_name', 'username', 'password'])
        
        # Writing the user data
        for i in range(1, num_users + 1):
            username = generate_username(base_username, i)
            password = generate_password()  # Generate a 10-character long password
            writer.writerow([first_name, last_name, username, password])

# Define the constants
first_name = "John"
last_name = "Doe"
base_username = "random"
num_users = 1000 # Number of users to generate

# Create the CSV
create_csv('user_data.csv', first_name, last_name, base_username, num_users)

print(f"CSV with {num_users} users created successfully.")
