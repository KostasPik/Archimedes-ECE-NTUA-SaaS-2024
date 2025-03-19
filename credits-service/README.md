# Credits Service
This Credits Service manages user credits. Users can retrieve their current credit balance and purchase additional credits. It ensures that each user has an initial balance if no credits exist.

## Credits Service API Endpoints

1. Get User Credits
	- **Endpoint**: `/get-credits`
	- **Method**: `GET`
	- **Description**: Retrieves the total credits for the authenticated user. If the user has no credits record, it creates one with an initial amount.
2. Buy Credits
	- **Endpoint**: `/buy-credits`
	- **Method**: `POST`
	- **Description**: Allows the authenticated user to buy credits by adding a specified amount to their total credits.
3. Remove Credit
	- **Endpoint**: `/remove-credit`
	- **Method**: `POST`
	- **Description**: Deducts one credit from the authenticated user's total credits. If the user has no credits, an error is returned.