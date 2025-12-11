import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainContent() {
  const { colors, toggleTheme, theme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState('Home');
  const scrollViewRef = useRef(null);
  const scrollPosition = useRef(0);
  
  const bgColor = colors?.bgPrimary || '#ffffff';
  const textColor = colors?.textPrimary || '#1a1a1a';
  const accentColor = colors?.accent || '#3b82f6';
  const borderColor = colors?.border || '#e5e5e5';
  const bgSecondary = colors?.bgSecondary || '#f5f5f5';
  const textSecondary = colors?.textSecondary || '#666666';

  // Profile data
  const profileData = {
    personal: {
      email: "tomas2000tutor@gmail.com",
      phone: "+54 2224 445207"
    },
    skills: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["C#", ".NET", "Node.js", "Python", "Java", "Spring Boot"],
      databases: ["SQL Server", "PostgreSQL"],
      tools: ["GitHub", "Jira", "Postman", "REST APIs"]
    }
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];
  
  // Duplicar items para scroll infinito (3 copias: inicio, medio, final)
  const infiniteNavItems = [...navItems, ...navItems, ...navItems];
  const itemWidth = 90; // Ancho aproximado de cada item
  const singleSetWidth = navItems.length * itemWidth;

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    scrollPosition.current = offsetX;
  };

  const handleScrollEnd = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const middlePosition = singleSetWidth; // Segunda copia (medio)
    
    // Si llegamos al final (tercera copia), volver al medio sin animación
    if (offsetX >= singleSetWidth * 2 - 50) {
      scrollViewRef.current?.scrollTo({ x: middlePosition, animated: false });
    }
    // Si estamos al inicio (primera copia), ir al medio
    if (offsetX <= 50) {
      scrollViewRef.current?.scrollTo({ x: middlePosition, animated: false });
    }
  };

  const renderContent = () => {
    switch(currentScreen) {
      case 'Home':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('home.title')}</Text>
            <Text style={[styles.subtext, { color: textSecondary }]}>{t('home.subtitle')}</Text>
            <Text style={[styles.subtext, { color: textSecondary }]}>{t('home.location')}</Text>
            <View style={styles.contactInfo}>
              <Text style={[styles.contactLink, { color: accentColor }]}>📧 {profileData.personal.email}</Text>
              <Text style={[styles.contactLink, { color: accentColor }]}>📱 {profileData.personal.phone}</Text>
            </View>
          </>
        );
      case 'About':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('about.title')}</Text>
            <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.summary')}</Text>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('about.education.title')}</Text>
              <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.education.degree')}</Text>
              <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.education.status')}</Text>
            </View>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('about.languages.title')}</Text>
              <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.languages.spanish')}</Text>
              <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.languages.english')}</Text>
              <Text style={[styles.subtext, { color: textSecondary }]}>{t('about.languages.italian')}</Text>
            </View>
          </>
        );
      case 'Experience':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('experience.title')}</Text>
            <View style={styles.experienceItem}>
              <Text style={[styles.experienceTitle, { color: accentColor }]}>{t('experience.thankit.title')}</Text>
              <Text style={[styles.experienceCompany, { color: textColor }]}>{t('experience.thankit.company')}</Text>
              <Text style={[styles.experiencePeriod, { color: textSecondary }]}>{t('experience.thankit.period')}</Text>
              <Text style={[styles.experienceDesc, { color: textSecondary }]}>{t('experience.thankit.description')}</Text>
            </View>
            <View style={styles.experienceItem}>
              <Text style={[styles.experienceTitle, { color: accentColor }]}>{t('experience.isfdyt.title')}</Text>
              <Text style={[styles.experienceCompany, { color: textColor }]}>{t('experience.isfdyt.company')}</Text>
              <Text style={[styles.experiencePeriod, { color: textSecondary }]}>{t('experience.isfdyt.period')}</Text>
              <Text style={[styles.experienceDesc, { color: textSecondary }]}>{t('experience.isfdyt.description')}</Text>
            </View>
            <View style={styles.experienceItem}>
              <Text style={[styles.experienceTitle, { color: accentColor }]}>{t('experience.bono.title')}</Text>
              <Text style={[styles.experienceCompany, { color: textColor }]}>{t('experience.bono.company')}</Text>
              <Text style={[styles.experiencePeriod, { color: textSecondary }]}>{t('experience.bono.period')}</Text>
              <Text style={[styles.experienceDesc, { color: textSecondary }]}>{t('experience.bono.description')}</Text>
            </View>
          </>
        );
      case 'Skills':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('skills.title')}</Text>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('skills.frontend')}</Text>
              <View style={styles.skillsRow}>
                {profileData.skills.frontend.map((skill, idx) => (
                  <View key={idx} style={[styles.skillTag, { backgroundColor: bgSecondary }]}>
                    <Text style={[styles.skillText, { color: textColor }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('skills.backend')}</Text>
              <View style={styles.skillsRow}>
                {profileData.skills.backend.map((skill, idx) => (
                  <View key={idx} style={[styles.skillTag, { backgroundColor: bgSecondary }]}>
                    <Text style={[styles.skillText, { color: textColor }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('skills.databases')}</Text>
              <View style={styles.skillsRow}>
                {profileData.skills.databases.map((skill, idx) => (
                  <View key={idx} style={[styles.skillTag, { backgroundColor: bgSecondary }]}>
                    <Text style={[styles.skillText, { color: textColor }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: accentColor }]}>{t('skills.tools')}</Text>
              <View style={styles.skillsRow}>
                {profileData.skills.tools.map((skill, idx) => (
                  <View key={idx} style={[styles.skillTag, { backgroundColor: bgSecondary }]}>
                    <Text style={[styles.skillText, { color: textColor }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          </>
        );
      case 'Projects':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('projects.title')}</Text>
            <Text style={[styles.subtext, { color: textSecondary }]}>{t('projects.description')}</Text>
            <View style={[styles.projectCard, { backgroundColor: bgSecondary }]}>
              <Text style={[styles.projectTitle, { color: accentColor }]}>{t('projects.react.title')}</Text>
              <Text style={[styles.projectDesc, { color: textSecondary }]}>{t('projects.react.description')}</Text>
              <View style={styles.projectTags}>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>React</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>TypeScript</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>Vite</Text>
                </View>
              </View>
            </View>
            <View style={[styles.projectCard, { backgroundColor: bgSecondary }]}>
              <Text style={[styles.projectTitle, { color: accentColor }]}>{t('projects.angular.title')}</Text>
              <Text style={[styles.projectDesc, { color: textSecondary }]}>{t('projects.angular.description')}</Text>
              <View style={styles.projectTags}>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>Angular</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>TypeScript</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>CSS</Text>
                </View>
              </View>
            </View>
            <View style={[styles.projectCard, { backgroundColor: bgSecondary }]}>
              <Text style={[styles.projectTitle, { color: accentColor }]}>{t('projects.mobile.title')}</Text>
              <Text style={[styles.projectDesc, { color: textSecondary }]}>{t('projects.mobile.description')}</Text>
              <View style={styles.projectTags}>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>React Native</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>Expo</Text>
                </View>
                <View style={[styles.projectTag, { backgroundColor: accentColor }]}>
                  <Text style={styles.projectTagText}>Mobile</Text>
                </View>
              </View>
            </View>
          </>
        );
      case 'Contact':
        return (
          <>
            <Text style={[styles.title, { color: accentColor }]}>{t('contact.title')}</Text>
            <Text style={[styles.subtext, { color: textSecondary }]}>{t('contact.subtitle')}</Text>
            <View style={styles.contactInfo}>
              <Text style={[styles.contactLabel, { color: accentColor }]}>{t('contact.email')}</Text>
              <Text style={[styles.contactValue, { color: textColor }]}>{profileData.personal.email}</Text>
              <Text style={[styles.contactLabel, { color: accentColor }]}>{t('contact.phone')}</Text>
              <Text style={[styles.contactValue, { color: textColor }]}>{profileData.personal.phone}</Text>
              <Text style={[styles.contactLabel, { color: accentColor }]}>{t('contact.location')}</Text>
              <Text style={[styles.contactValue, { color: textColor }]}>{t('home.location')}</Text>
            </View>
          </>
        );
      default:
        return <Text style={[styles.title, { color: accentColor }]}>Home</Text>;
    }
  };

  React.useEffect(() => {
    // Iniciar en el medio del scroll infinito (segunda copia)
    const middlePosition = singleSetWidth;
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({ x: middlePosition, animated: false });
    }, 100);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]} edges={['top']}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <View style={[styles.navbar, { backgroundColor: bgColor, borderBottomColor: borderColor }]}>
        {/* Primera fila: Logo y controles */}
        <View style={styles.topRow}>
          <Text style={[styles.logo, { color: accentColor }]}>TTO</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={toggleLanguage} style={[styles.controlButton, { backgroundColor: bgSecondary }]}>
              <Text style={[styles.controlText, { color: textColor }]}>{language === 'en' ? 'ES' : 'EN'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTheme} style={[styles.controlButton, { backgroundColor: bgSecondary }]}>
              <Text style={[styles.controlText, { color: textColor }]}>{theme === 'light' ? '🌙' : '☀️'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Segunda fila: Carrusel de navegación */}
        <View style={styles.carouselContainer}>
          <View style={[styles.scrollIndicator, styles.leftIndicator, { backgroundColor: bgColor }]}>
            <Text style={[styles.arrowIndicator, { color: textColor }]}>‹</Text>
          </View>
          <ScrollView 
            ref={scrollViewRef}
            horizontal 
            showsHorizontalScrollIndicator={true}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={16}
            style={styles.navItemsContainer}
            contentContainerStyle={styles.navItemsContent}
            decelerationRate="normal"
          >
            {infiniteNavItems.map((item, index) => {
              const isActive = currentScreen === item;
              return (
                <TouchableOpacity
                  key={`${item}-${index}`}
                  onPress={() => setCurrentScreen(item)}
                  style={[styles.navButton, { width: itemWidth }]}
                >
                  <Text style={[styles.navText, { color: isActive ? accentColor : textColor }]}>
                    {t(`nav.${item.toLowerCase()}`)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={[styles.scrollIndicator, styles.rightIndicator, { backgroundColor: bgColor }]}>
            <Text style={[styles.arrowIndicator, { color: textColor }]}>›</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  controlButton: {
    padding: 10,
    borderRadius: 6,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    fontSize: 14,
    fontWeight: '600',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  scrollIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 30,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  leftIndicator: {
    left: 0,
  },
  rightIndicator: {
    right: 0,
  },
  arrowIndicator: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navItemsContainer: {
    flex: 1,
    marginHorizontal: 0,
  },
  navItemsContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactInfo: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  contactLink: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  contactValue: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  experienceItem: {
    width: '100%',
    marginBottom: 25,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  experienceCompany: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'center',
  },
  experiencePeriod: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  experienceDesc: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 5,
  },
  skillText: {
    fontSize: 14,
    fontWeight: '500',
  },
  projectCard: {
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  projectDesc: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 20,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  projectTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    margin: 4,
  },
  projectTagText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
