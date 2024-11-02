# Creational Methods Samples

This repository showcases the implementation of creational design patterns using decorators in TypeScript.

## Person Class

The `Person` class demonstrates how to create a person object with a first name and last name. It utilizes the `Builder`, `Getter`, `Setter`, and `With` decorators to streamline the process of object creation and property management.

### Properties

- **firstName**: Represents the first name of the person.
- **lastName**: Represents the last name of the person.

## Administrator Class

The `Administrator` class represents an admin user with specific attributes. It also leverages the same decorators to simplify the instantiation of objects.

### Properties

- **username**: Represents the administrator's username.
- **role**: Indicates the role of the administrator.

## Creational Methods Library

The `creational-methods` library provides decorators that facilitate the implementation of design patterns in TypeScript. These patterns help in organizing and managing code more effectively, especially when dealing with complex object creation.

### Decorators

- **Builder**: Simplifies the construction of complex objects.
- **Getter**: Automatically generates a getter for class properties.
- **Setter**: Automatically generates a setter for class properties.
- **With**: Merges properties from one object into another.

## Installation

To utilize the creational methods in your project, install the `creational-methods` package via npm.

## Usage

Once installed, you can create instances of the `Person` and `Administrator` classes using the provided builder patterns.

### Example

- Creating a `Person` object with the builder pattern.
- Creating an `Administrator` object with the builder pattern.
