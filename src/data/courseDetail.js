export const dataDetail = {
  title: 'Architecting for Reliability on AWS',
  image:
    'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
  authors: [
    {
      name: 'Mike Pfeiffer',
      image:
        'https://pluralsight.imgix.net/author/lg/7171fd1a-7c0f-4c8a-bbc2-93da74eb4b32.png?w=200',
    },
    {
      name: 'joe eames',
      image: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
  ],
  level: 'Intermediate',
  rating: 83,
  duration: '3h 34m',
  updated: 'May 2018',
  description:
    'Learn how to implement a highly available and reliable application architecture using the patterns and best practices recommended by AWS. In this course, Architecting for Reliability on AWS, you will first explore the key concepts and core services of AWS. Next, you will follow along step-by-step to implement a real-world application that is built with the reliability principles defined within the AWS Well Architected Framework. Finally, you will learn how to further increase the reliability of an application architecture on AWS by implementing multi-region solutions. By the end of this course, you will have a variety of AWS architecture skills for the real world.',
};

export const listVideoCourse = [
  {
    name: 'Course Overview',
    total: '1:32',
    isMarkdown: true,
    detail: [
      {
        name: 'Course Overview',
        time: '1:32',
        isView: true,
      },
    ],
  },
  {
    name: 'Course Introduction',
    total: '6:24',
    detail: [
      {
        name: 'Getting started',
        time: '6:24',
        isView: true,
      },
    ],
  },
  {
    name: 'Key Concepts and Core Services',
    total: '41:06',
    detail: [
      {
        name: 'What We Will Cover',
        time: '1:27',
        isView: true,
      },
      {
        name: 'Understanding Identity and Access Management (IAM)',
        time: '3:55',
        isView: false,
      },
      {
        name: 'Configuring Additional IAM Best Practices',
        time: '6:42',
        isView: false,
      },
      {
        name: 'Configuring Additional IAM Best Practices',
        time: '3:36',
        isView: false,
      },
      {
        name: 'Audit Logging with CloudTrail',
        time: '2:51',
        isView: false,
      },
      {
        name: 'Configuring Alarms and Notifications with CloudWatch',
        time: '5:07',
        isView: false,
      },
      {
        name: 'Protecting from DDoS Attacks Using AWS Shield',
        time: '3:27',
        isView: false,
      },
      {
        name: 'Implementing Change Management with AWS Config',
        time: '8:36',
        isView: false,
      },
      {
        name: 'Managing Service Limits with Trusted Advisor',
        time: '3:06',
        isView: false,
      },
      {
        name: 'Key Takeaways',
        time: '2:19',
        isView: false,
      },
    ],
  },
  {
    name: 'Architecting for Availability and Fault Tolerance',
    total: '31:08',
    detail: [
      {
        name: 'What We Will Cover',
        time: '1:09',
        isView: false,
      },
      {
        name: 'Regions and Availability Zones',
        time: '4:30',
        isView: false,
      },
      {
        name: 'Launching an EC2 Instance into an Availability Zone',
        time: '4:40',
        isView: false,
      },
      {
        name: 'Eliminating Single Points of Failure',
        time: '3:59',
      },
      {
        name: 'Vertical and Horizontal Scaling',
        time: '3:07',
      },
      {
        name: 'Architecting with Services Instead of Servers',
        time: '5:24',
      },
      {
        name: 'Implementing Loose Coupling',
        time: '5:50',
      },
      {
        name: 'Key Takeaways',
        time: '2:30',
      },
    ],
  },
  {
    name: 'Architecting Reliable Virtual Networks',
    total: '45:09',
    detail: [
      {
        name: 'What We Will Cover',
        time: '1:05',
      },
      {
        name: 'Virtual Private Cloud (VPC) Overview',
        time: '3:35',
      },
      {
        name: 'Creating a Custom VPC with Public and Private Subnets',
        time: '6:47',
      },
      {
        name: 'Adding Public and Private Subnets to an Existing VPC',
        time: '6:38',
      },
      {
        name: 'Validating Outbound Internet Access Through NAT Gateways',
        time: '7:01',
      },
      {
        name: 'Controlling Traffic with Security Groups and ACLs',
        time: '6:56',
      },
      {
        name: 'Implementing a Load Balancer in a VPC',
        time: '8:29',
      },
      {
        name: 'Hybrid Networking with Amazon VPC',
        time: '2:27',
      },
      {
        name: 'Key Takeaways',
        time: '1:50',
      },
    ],
  },
  {
    name: 'Architecting a Multi-tier Application',
    total: '38:06',
    detail: [
      {
        name: 'What We Will Cover',
        time: '1:24',
      },
      {
        name: 'Configuring Security Groups for the App and Data Tiers',
        time: '2:09',
      },
      {
        name: 'Building the Data Tier with Amazon RDS',
        time: '6:42',
      },
      {
        name: 'Implementing Shared Storage Using Amazon EFS',
        time: '3:54',
      },
      {
        name: 'Configuring the WordPress Installation',
        time: '9:45',
      },
      {
        name: 'Load Balancing the App Tier on EC2 Instances',
        time: '5:38',
      },
      {
        name: 'Domain and DNS Registration with Route 53',
        time: '2:48',
      },
      {
        name: 'Configuring SSL on the Load Balancer',
        time: '3:07',
      },
      {
        name: 'Key Takeaways',
        time: '2:36',
      },
    ],
  },
  {
    name: 'Minimizing Risk with Deployment Automation',
    total: '33:10',
    detail: [
      {
        name: 'What We Will Cover',
        time: '1:09',
      },
      {
        name: 'Automating Deployments with Auto Scaling Groups',
        time: '7:07',
      },
      {
        name: 'Scaling Dynamically Based on Resource Utilization',
        time: '8:45',
      },
      {
        name: 'Validating Automatic Self Healing Servers',
        time: '3:40',
      },
      {
        name: 'Automatic Recovery of a Failed Availability Zone',
        time: '2:50',
      },
      {
        name: 'Infrastructure Automation with CloudFormation',
        time: '5:01',
      },
      {
        name: 'Common Automated Deployment Patterns',
        time: '2:58',
      },
      {
        name: 'Key Takeaways',
        time: '1:41',
      },
    ],
  },
  {
    name: 'Architecting Multi-region Solutions',
    total: '17:50',
    detail: [
      {
        name: 'What We Will Cover',
        time: '0:56',
      },
      {
        name: 'Pilot Light Architecture',
        time: '2:52',
      },
      {
        name: 'Warm Standby Architecture',
        time: '1:53',
      },
      {
        name: 'Active/Active Multi-region Architecture',
        time: '1:50',
      },
      {
        name: 'Setting up Health Checks in Route 53',
        time: '4:30',
      },
      {
        name: 'Creating a Route 53 Failover Record Set',
        time: '3:54',
      },
      {
        name: 'Key Takeaways',
        time: '1:55',
      },
    ],
  },
];
