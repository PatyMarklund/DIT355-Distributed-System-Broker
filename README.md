# DIT355 - Distributed Systems - Broker Repository

 
 
## Description
The broker component is responsible for handling most of the communication between components in our system. For a more detailed view of the DENS CURA system, please view the [Main repository](https://github.com/PatyMarklund/DIT355-Distributed-System-Main). 

*** 

 

## Component responsibilities

* Authenticating clients
* Allowing clients to subscribe to specific topics and publish messages to specific topics
* Receiving messages and delivering messages to those clients that have subscribed to the topic that they pertain to.
* Allowing clients to specificy additional information such as the Quality of Service(QOS) level and if the message should be retained.

*** 

## Installing and running

### Prerequisites:


**Node** 

* The following versions were used by our team during development, newer versions might also work: Windows v16.17.0 - Linux v12.22.9 - MacOS 14.20.0 - [Download](https://nodejs.org/en/download/) 


*** 
### Instructions:

| Step: | Instruction: |
| ------ | ------ |
| Clone this project on your machine | `git clone < SSH address or HTTPS address >` |
| Install necessary dependencies  | `npm i` |
| Start the system by running the following command in a terminal | `npm start` |
| To use the Test publisher client to trip the circuit breaker for creating bookings open a new terminal and run |`cd bookingTest`| 
| now start the publisher by running | `node publisher.js` |
 
 Make sure to also start the other systems since they are dependant on each other to work properly.
 


