# Listeners

## Qu'est-ce qu'un listener ?

Un listener définit le protocole et les paramètres qui seront utilisés par le Beacon pour communiquer avec le serveur C2 (teamserver). Ils peuvent être de plusieurs types, comme DNS, HTTP(S), TCP, SMB, etc.

::: warning ATTENTION
Il convient de bien choisir le protocole pour se fondre dans la masse des flux réseau lors d'un exercice de Red Teaming. Sans quoi, la détection par les équipes de sécurité est beaucoup plus risquée.
:::

## Types de listener 

Il existe 2 types de listener : 
- Egress
- Peer-to-Peer

### Egress

Les listeners de type `Egress` permettent une communication directe avec le serveur C2. Par exemple, on retrouve les protocoles DNS & HTTP(S).

### Peer-to-Peer

Les listeners de type `Peer-to-Peer`, quant à eux, ne communiquent pas directement vers le serveur C2. Le trafic réseau est routé à travers un autre beacon. Plusieurs beacons P2P peuvent donc être chaînés ensemble, mais devront obligatoirement être lié à un beacon `Egress` pour communiquer avec le teamserver.

![Listeners-linked-examples](./img/Listeners.svg)