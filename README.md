# Bands Service - React UI

Bands Service - React UI is a frontend application built with React to manage bands, allowing users to:

- View a list of bands
- View band details
- Create, update, and delete bands
- Upload a CSV/Excel file with bands data

This UI interacts with the **[Bands Service API](https://github.com/freelancerwebro/bands-service)** to provide seamless band management.

## Tech Stack

- React 19
- Tailwind CSS
- Docker
- Jest

## Requirements

- [git](https://github.com/git-guides/install-git)
- [docker-compose](https://docs.docker.com/compose/install/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

- Clone the git repository:

```
git clone git@github.com:freelancerwebro/bands-service-react-ui.git
```

- Run the following command to build the service:

```
./deploy.sh
```

The app will be available at http://localhost:3010.

## Running Tests

```
npm test a
```

## Preview

#### Band list
![app preview](https://raw.githubusercontent.com/freelancerwebro/bands-service-react-ui/refs/heads/main/public/images/list.png)

#### Import bands
![app preview](https://raw.githubusercontent.com/freelancerwebro/bands-service-react-ui/refs/heads/main/public/images/import.png)

#### Add band
![app preview](https://raw.githubusercontent.com/freelancerwebro/bands-service-react-ui/refs/heads/main/public/images/add.png)

#### Band details
![app preview](https://raw.githubusercontent.com/freelancerwebro/bands-service-react-ui/refs/heads/main/public/images/details.png)