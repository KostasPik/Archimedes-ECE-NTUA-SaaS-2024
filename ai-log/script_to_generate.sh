#!/bin/bash

# Loop from 1 to 60
for ((number=1; number<=60; number++)); do
    # Create .txt file
    touch "prompt${number}.txt"
    # Create .json file
    touch "prompt${number}.json"
done