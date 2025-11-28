// components/ui/Button.jsx
import Link from 'next/link';

export default function Button({ 
  children,
  href,
  onClick,
  // Style customization
  bgColor = 'bg-[#FFA21F]',
  hoverBgColor = 'hover:bg-yellow-400',
  textColor = 'text-purple-900',
  hoverTextColor = 'hover:text-purple-900',
  // Size customization
  width = 'auto', // 'auto', 'full', 'fit', or custom like 'w-64'
  height = 'auto', // 'auto' or custom like 'h-12'
  padding = 'px-8 py-4',
  // Border & Shape
  borderRadius = 'rounded-full',
  border = '',
  // Icon customization
  showIcon = true,
  iconPosition = 'right', // 'left' or 'right'
  icon = null, // Custom icon component
  iconSize = 'w-5 h-5',
  // Text customization
  fontSize = 'text-base',
  fontWeight = 'font-semibold',
  // Additional effects
  shadow = 'hover:shadow-lg',
  scale = 'hover:scale-105',
  transition = 'transition-all duration-300',
  // Other props
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
}) {
  // Handle width classes
  const widthClass = 
    width === 'full' ? 'w-full' :
    width === 'fit' ? 'w-fit' :
    width === 'auto' ? '' :
    width;

  // Handle height classes
  const heightClass = height === 'auto' ? '' : height;

  // Build complete class string
  const buttonClasses = `
    inline-flex items-center justify-center gap-2
    ${widthClass}
    ${heightClass}
    ${padding}
    ${borderRadius}
    ${border}
    ${bgColor}
    ${hoverBgColor}
    ${textColor}
    ${hoverTextColor}
    ${fontSize}
    ${fontWeight}
    ${shadow}
    ${scale}
    ${transition}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Default arrow icon
  const defaultIcon = (
    <svg 
      className={iconSize}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M7 17L17 7" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M7 7H17V17" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // Icon to display
  const displayIcon = icon || defaultIcon;

  // Button content
  const content = (
    <>
      {showIcon && iconPosition === 'left' && displayIcon}
      {children}
      {showIcon && iconPosition === 'right' && displayIcon}
    </>
  );

  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}

/* 
USAGE EXAMPLES:

1. Basic button 
<Button href="/contact">
  Get In Touch
</Button>

2. Custom colors:
<Button 
  bgColor="bg-blue-600" 
  hoverBgColor="hover:bg-blue-700"
  textColor="text-white"
>
  Learn More
</Button>

3. Full width button:
<Button width="full" bgColor="bg-green-500">
  Submit Form
</Button>

4. Custom size:
<Button 
  width="w-64" 
  height="h-14" 
  fontSize="text-lg"
>
  Large Button
</Button>

5. Button without icon:
<Button showIcon={false} bgColor="bg-red-500">
  Delete
</Button>

6. Icon on left:
<Button iconPosition="left">
  Go Back
</Button>

7. Custom icon:
<Button 
  icon={<YourCustomIcon />}
  iconSize="w-6 h-6"
>
  Custom Icon
</Button>

8. Outlined button:
<Button 
  bgColor="bg-transparent" 
  hoverBgColor="hover:bg-white"
  textColor="text-white"
  hoverTextColor="hover:text-purple-900"
  border="border-2 border-white"
>
  Outline Button
</Button>

9. Square/rounded button:
<Button borderRadius="rounded-lg">
  Squared Corners
</Button>

10. Disabled button:
<Button disabled>
  Disabled
</Button>

11. Different padding:
<Button padding="px-6 py-3">
  Smaller Padding
</Button>

12. No hover effects:
<Button scale="" shadow="">
  No Effects
</Button>

13. Click handler:
<Button 
  onClick={() => console.log('clicked')}
  bgColor="bg-purple-600"
>
  Click Me
</Button>

14. External link:
<Button 
  href="https://example.com" 
  target="_blank"
>
  External Link
</Button>

15. Gradient button:
<Button 
  bgColor="bg-gradient-to-r from-purple-500 to-pink-500"
  hoverBgColor="hover:from-purple-600 hover:to-pink-600"
  textColor="text-white"
>
  Gradient Button
</Button>
*/