import * as Icons from '@mui/icons-material';

export default function getIcon (iconName, defaultIcon = 'ErrorOutline') {
  const IconComponent = Icons[iconName] || Icons[defaultIcon];
  
  if (!IconComponent) {
    console.error(`Icon ${iconName} and fallback ${defaultIcon} both missing`);
    return Icons.Warning; // Ultimate fallback
  }
  
  return IconComponent;
};