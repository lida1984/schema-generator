/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-08 11:53:00
 * @LastEditors: lida
 * @LastEditTime: 2021-04-19 11:32:00
 * @FilePath: \schema-generator\src\widgets\antd\checkboxes.js
 */
import React from 'react';
import { Checkbox } from 'antd';

export default function checkboxes(p) {
  const { enum: enums, enumNames } = p.schema || {};
  const _value = p.value && Array.isArray(p.value) ? p.value : [];
  return (
    <Checkbox.Group
      disabled={p.disabled || p.readonly}
      value={_value}
      defaultValue={p.defaultValue}
      onChange={p.onChange}
    >
      {(enums || [true, false]).map((val, index) => (
        <Checkbox value={val} key={index}>
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: enumNames ? enumNames[index] : val,
            }}
          />
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
