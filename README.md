# 此仓库已废弃

**重要：** 此仓库后续不再维护，也不再接受更多的特性更新。`form-render/schema-generator` 将会迁移至 `alibaba/x-render` 仓库进行后续的维护，访问 https://x-render.gitee.io/ 了解更多。此变更不影响继续使用 `schema-generator` 这个 npm 包名安装使用此组件。

<img src="https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true" width="750px"/>

<img src="https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true" alt="schema编辑器" width='750px' />

### 安装

```bash
npm i fr-generator
```

### 使用

```js
import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '简单输入框',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  const submit = schema => {
    alert(JSON.stringify(schema));
  };

  return <Generator defaultValue={defaultValue} />;
};

export default Demo;
```

代码展示效果见 Demo。
