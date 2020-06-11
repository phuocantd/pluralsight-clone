import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ThemeContext} from 'tools/context/theme';

export default function Transcript() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <View>
      <Text
        style={StyleSheet.compose(
          {fontSize: 23},
          colors.text,
        )}>
        Architecting for Reliability on AWS
      </Text>
      <Text
        style={StyleSheet.compose(
          {fontSize: 20, marginVertical: 10},
          colors.text,
        )}>
        Course Overview
      </Text>
      <Text style={colors.text}>
        Hey everyone. This is Mike Pfeiffer, and welcome to Architecting for
        Reliability on AWS. In this course, we'll work together to implement a
        highly available and reliable application architecture using the
        patterns and best practices recommended by AWS. To get started, we'll
        take a look at key concepts and course services when it comes to working
        on AWS, and you'll learn how to set up foundational services like
        identity and access management, how to enable and review audit logs, and
        how to set up alarms and notifications. Next, we'll move onto learning
        some of the common architectural patterns used every day by real-world
        AWS solution architects to build reliable systems and to implement fault
        tolerance into an application architecture running on AWS. Throughout
        the rest of the course, we'll work step by step to build up an
        application architecture across multiple Availability Zones within an
        AWS Region, and you'll learn how to properly design and deploy a virtual
        private cloud environment consisting of redundant database instances
        along with autoscaling groups that power a load-balanced web
        application. We'll also discuss how to further increase the reliability
        of an application architecture on AWS by implementing multi-region
        solutions for disaster recovery in global scale. So whether you're
        looking to pick up AWS architecture skills for the real world, or you're
        just preparing for AWS's certification, you're definitely in the right
        place, and I look forward to working with you as we explore how to
        architect reliable applications on the AWS cloud platform.
      </Text>
    </View>
  );
}
