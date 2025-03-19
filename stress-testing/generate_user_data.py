import csv
import random
import string

def generate_random_string(length=8):
    return ''.join(random.choices(string.ascii_letters, k=length))

def generate_unique_users(num_users):
    users = set()

    while len(users) < num_users:
        val = generate_random_string()
        first_name = val
        last_name = val
        username = val
        password = val

        # Ensure uniqueness
        user_tuple = (first_name, last_name, username, password)
        users.add(user_tuple)
    users.add(('kostas', 'kostas', 'kostas', 'kostas'))
    return users

def write_to_csv(users, filename='user_data.csv'):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['first_name', 'last_name', 'username', 'password'])  # Header
        writer.writerows(users)

def main():
    num_users = 198  # Change this to generate the desired number of users
    unique_users = generate_unique_users(num_users)
    write_to_csv(unique_users)

if __name__ == "__main__":
    main()