/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-08 11:53:00
 * @LastEditors: lida
 * @LastEditTime: 2021-04-19 11:34:18
 * @FilePath: \schema-generator\src\widgets\antd\checkbox.js
 */
import React from 'react';
import { Checkbox } from 'antd';

export default function radio({
  value,
  defaultValue,
  onChange,
  disabled,
  readonly,
}) {
  const handleChange = e => {
    onChange(e.target.checked);
  };

  return (
    <Checkbox
      disabled={disabled || readonly}
      onChange={handleChange}
      checked={value}
      defaultChecked={defaultValue || value}
    />
  );
}
