import React from 'react';

const CogSvg: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10.163C21.674 10.3463 21.4027 10.613 21.2139 10.9359C21.0252 11.2587 20.9258 11.626 20.926 12C20.926 12.789 21.359 13.476 22 13.837L21.283 16.243C20.8954 16.1763 20.497 16.2196 20.1327 16.3678C19.7685 16.516 19.453 16.7633 19.2222 17.0816C18.9913 17.3999 18.8542 17.7766 18.8264 18.1688C18.7986 18.5611 18.8813 18.9533 19.065 19.301L17.003 20.903C16.73 20.6792 16.4051 20.5277 16.0582 20.4624C15.7113 20.3971 15.3535 20.4202 15.0179 20.5295C14.6822 20.6387 14.3794 20.8307 14.1374 21.0877C13.8954 21.3447 13.7219 21.6584 13.633 22L10.343 21.992C10.2531 21.652 10.0794 21.34 9.83778 21.0845C9.59618 20.829 9.29439 20.6381 8.95999 20.5292C8.62559 20.4204 8.26924 20.3972 7.92353 20.4616C7.57782 20.526 7.25377 20.676 6.981 20.898L4.921 19.283C5.09957 18.9367 5.17855 18.5477 5.14914 18.1592C5.11973 17.7708 4.98309 17.3981 4.75442 17.0826C4.52576 16.7672 4.21404 16.5214 3.85398 16.3727C3.49391 16.2239 3.09962 16.178 2.715 16.24L2 13.825C2.31995 13.6398 2.58551 13.3737 2.77 13.0533C2.95449 12.733 3.0514 12.3697 3.051 12C3.051 11.22 2.63 10.54 2 10.175L2.715 7.76C3.0997 7.82225 3.49412 7.77648 3.85435 7.6278C4.21457 7.47912 4.52645 7.23336 4.75525 6.9179C4.98405 6.60243 5.12078 6.22964 5.15022 5.84106C5.17966 5.45247 5.10066 5.06334 4.922 4.717L6.98 3.102C7.25277 3.32395 7.57682 3.47399 7.92253 3.53841C8.26824 3.60283 8.62459 3.57957 8.95899 3.47075C9.29339 3.36194 9.59518 3.17104 9.83678 2.91551C10.0784 2.65998 10.2521 2.34797 10.342 2.008L13.634 2C13.7229 2.34161 13.8964 2.65535 14.1384 2.91233C14.3804 3.16931 14.6832 3.36127 15.0189 3.47053C15.3545 3.5798 15.7123 3.60285 16.0592 3.53758C16.4061 3.4723 16.731 3.32079 17.004 3.097L19.064 4.7C18.8803 5.04769 18.7976 5.43989 18.8254 5.83215C18.8532 6.22442 18.9903 6.60106 19.2212 6.91938C19.452 7.23771 19.7675 7.485 20.1317 7.63322C20.496 7.78144 20.8944 7.82467 21.282 7.758L22 10.162V10.163ZM16.823 5.68C16.823 5.617 16.825 5.555 16.828 5.492L16.748 5.43C15.9691 5.64219 15.1449 5.61989 14.3786 5.36588C13.6123 5.11187 12.9379 4.63744 12.44 4.002L11.536 4.004C11.0399 4.63674 10.3687 5.10966 9.60597 5.36392C8.8432 5.61817 8.02251 5.64255 7.246 5.434L7.151 5.51C7.18866 6.41268 6.92769 7.30259 6.4085 8.04197C5.8893 8.78135 5.14085 9.32895 4.279 9.6C4.78181 10.2988 5.05191 11.1381 5.051 11.999C5.051 12.881 4.771 13.714 4.279 14.399C5.14085 14.67 5.8893 15.2176 6.4085 15.957C6.92769 16.6964 7.18866 17.5863 7.151 18.489L7.247 18.564C8.02339 18.3562 8.84371 18.3809 9.60617 18.6351C10.3686 18.8894 11.0397 19.3619 11.536 19.994L12.44 19.996C12.9376 19.3604 13.6118 18.8859 14.3779 18.6319C15.1441 18.3778 15.9682 18.3556 16.747 18.568L16.827 18.506C16.7858 17.6005 17.0452 16.7068 17.5649 15.9642C18.0845 15.2215 18.8352 14.6716 19.7 14.4C19.1968 13.701 18.9263 12.8613 18.927 12C18.927 11.118 19.208 10.284 19.7 9.6C18.866 9.33781 18.1374 8.81638 17.6201 8.11155C17.1029 7.40672 16.824 6.55526 16.824 5.681L16.823 5.68ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default CogSvg;