// import {
//   ArrowPathIcon,
//   CloudArrowUpIcon,
//   CogIcon,
//   LockClosedIcon,
//   ServerIcon,
//   ShieldCheckIcon,
//   WindowIcon,

  
// } from '@heroicons/react/24/outline'

// const features = [
//   {
//     name: 'Web development',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: WindowIcon,
//   },
//   {
//     name: 'Mobile apps development',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Computer Hardware',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ArrowPathIcon,
//   },
//   {
//     name: 'Cyber security',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'IOT systems',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: CogIcon,
//   },
//   {
//     name: 'CCTV',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]

import Card from 'react-bootstrap/Card';

export default function Featureslist({ thumbnailUrl, name, description }) {
  

  return (
    <div className="featurelist">
          <Card>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}
