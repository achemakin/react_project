import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={ styles.preview }>
      <img
        className={ styles.previewImg }
        src="https://cdn.dribbble.com/users/59947/screenshots/16837511/media/08f0e84f9190d8d815a87fca1dbd1280.jpg?compress=1&resize=600x450" 
        alt="Latin America editorial ruins airport temples technology latin america science typography lettering perspective characterdesign isometric design retro drawing graphic character vector texture illustration" 
      />
    </div>
  );
}
