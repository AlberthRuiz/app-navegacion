import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const colors = {
  primary: '#20B2AA',
  white: '#ffffff',
  dark: '#333333',
  medium: '#666666',
  light: '#999999',
  background: '#f8f9fa',
  border: '#e9ecef',
  inputBg: '#f8f9fa',
  priorityHigh: '#FF6B6B',
  priorityMedium: '#FFD93D',
  priorityLow: '#6BCF7F',
  info: '#1976D2',
  infoBg: '#E3F2FD',
};

export const dimensions = {
  screenWidth: width,
  borderRadius: 8,
  borderRadiusLarge: 12,
  padding: 16,
  paddingLarge: 20,
  paddingSmall: 8,
  margin: 16,
  marginLarge: 20,
  marginSmall: 8,
  iconSize: 24,
  iconSizeLarge: 32,
  iconSizeSmall: 16,
};

export const shadows = {
  primary: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
};

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerGray: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  contentWithPadding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimensions.paddingLarge,
    paddingVertical: dimensions.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    marginLeft: dimensions.paddingSmall,
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.primary,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 16,
    textAlign: 'center',
  },
  titleLarge: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.medium,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
  },
  label: {
    fontSize: 14,
    color: colors.medium,
    marginBottom: dimensions.paddingSmall,
    fontWeight: '500',
  },
  labelLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: dimensions.paddingSmall,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: dimensions.paddingLarge,
  },
  inputContainerSmall: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: dimensions.borderRadius,
    paddingVertical: dimensions.padding,
    paddingHorizontal: dimensions.padding,
    fontSize: 16,
    color: colors.dark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputWhite: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius,
    paddingVertical: dimensions.padding,
    paddingHorizontal: dimensions.padding,
    fontSize: 16,
    color: colors.dark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textArea: {
    height: 100,
    paddingTop: dimensions.padding,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: dimensions.padding,
    borderRadius: dimensions.borderRadius,
    ...shadows.primary,
  },
  primaryButtonLarge: {
    backgroundColor: colors.primary,
    paddingVertical: dimensions.padding,
    paddingHorizontal: 60,
    borderRadius: dimensions.borderRadius,
    width: width - 80,
    ...shadows.primary,
  },
  primaryButtonWithMargin: {
    backgroundColor: colors.primary,
    paddingVertical: dimensions.padding,
    borderRadius: dimensions.borderRadius,
    marginTop: dimensions.paddingLarge,
    ...shadows.primary,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: dimensions.padding,
    borderRadius: dimensions.borderRadius,
    backgroundColor: colors.background,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    color: colors.medium,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  link: {
    marginTop: dimensions.paddingLarge,
    paddingVertical: 10,
  },
  linkText: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadiusLarge,
    padding: dimensions.padding,
    marginBottom: dimensions.marginSmall,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.card,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: dimensions.paddingSmall,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: colors.light,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskDate: {
    fontSize: 12,
    color: colors.medium,
  },
  priorityBadge: {
    paddingHorizontal: dimensions.paddingSmall,
    paddingVertical: 4,
    borderRadius: dimensions.borderRadiusLarge,
  },
  priorityText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '600',
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priorityButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: dimensions.borderRadius,
    borderWidth: 2,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  priorityButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.medium,
  },
  priorityButtonTextSelected: {
    color: colors.white,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: dimensions.paddingLarge,
    paddingVertical: dimensions.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  filterButton: {
    paddingHorizontal: dimensions.padding,
    paddingVertical: dimensions.paddingSmall,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: colors.background,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    color: colors.medium,
    fontWeight: '500',
  },
  filterTextActive: {
    color: colors.white,
  },
  pendingBadge: {
    backgroundColor: colors.infoBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pendingText: {
    fontSize: 12,
    color: colors.info,
    fontWeight: '600',
  },
  taskList: {
    flex: 1,
  },
  taskListContent: {
    padding: dimensions.paddingLarge,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: dimensions.paddingLarge,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: dimensions.paddingLarge,
    paddingVertical: dimensions.paddingLarge,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  buttonContainerSingle: {
    paddingHorizontal: dimensions.paddingLarge,
    paddingVertical: dimensions.paddingLarge,
  },
  editButton: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.infoBg,
    borderRadius: dimensions.borderRadius,
    padding: dimensions.paddingSmall,
    
  },




});

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'Alta': return colors.priorityHigh;
    case 'Media': return colors.priorityMedium;
    case 'Baja': return colors.priorityLow;
    default: return colors.priorityLow;
  }
};
