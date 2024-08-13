import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const AboutUs = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/Icon.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to Thread Tales! We are a dedicated team of textile enthusiasts and technology experts committed to revolutionizing the way you interact with fabrics.
        Our diverse group brings together years of experience in textile design, software development, and user experience.
        Together, we strive to create innovative solutions that empower designers, manufacturers, and hobbyists with cutting-edge tools and insights.
        Join us on our journey to transform the textile industry with technology that enhances creativity and efficiency.

      </Text>
      <Text style={styles.description}>
        Handloom textiles are cherished for their exceptional craftsmanship, cultural heritage, and unique beauty.
        Each piece reflects meticulous manual weaving techniques passed down through generations, showcasing intricate patterns and high-quality materials.
        Handloom fabrics support traditional artisans, foster sustainable practices, and offer distinctive, personalized products that stand out in a world of mass production.
        Embracing handloom textiles means valuing artistry, tradition, and the enduring charm of handmade quality.
        Our team is dedicated to curating a diverse selection of products that cater to all your needs.
        We believe in the power of customer satisfaction, and our support team is always here to help you with any
        questions or concerns.

      </Text>
      <Text style={styles.description}>
        Thank you for choosing us as your trusted shopping destination. We look forward to serving you!
      </Text>

      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <TouchableOpacity onPress={() => handleLinkPress('mailto:snehalsingh2004@gmail.com')}>
          <Text style={styles.linkText}>Email:snehalsingh2004@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress('mailto:shrutisomya2003@gmail.com')}>
          <Text style={styles.linkText}>Email:shrutisomya2003@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress('tel:+1234567890')}>
          <Text style={styles.linkText}>Phone: 6370359458</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress('tel:+1234567890')}>
          <Text style={styles.linkText}>Phone: 9162995811</Text>
        </TouchableOpacity>
        <Text style={styles.contactTitle}>Follow Us</Text>
        <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com/shruti..nayak?igsh=ZGUzcXp3eWluOHls')}>
          <Text style={styles.linkText}>Instagram: @Shruti Nayak</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com/snehal_singh_04?igsh=MTUwbDdiejA0dmd5NA==')}>
          <Text style={styles.linkText}>Instagram: @Snehal Singh</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(25),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24,
  },
  contactContainer: {
    marginTop: 30,
    width: '100%',
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutUs;
