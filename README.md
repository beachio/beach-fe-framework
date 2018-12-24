# BeachFe

## \$feStore

Inside BeachFe we have a store `\$feStore`. This is a secondary store that should be used for communicating with `Beach Api Core`.

### Application

|                        | type   | params                | description                                       |
| ---------------------- | ------ | --------------------- | ------------------------------------------------- |
| `application/setTheme` | action | `"dark"` or `"light"` | set main theme                                    |
| `application/loaded`   | action |                       | set application as loaded                         |
| `application/theme`    | getter |                       | returns main theme                                |
| `application/loaded`   | getter |                       | returns `true` or `false` if app is loaded or not |

### Sidebar

|                  | type   | params | description                                |
| ---------------- | ------ | ------ | ------------------------------------------ |
| `sidebar/open`   | action |        | open sidebar                               |
| `sidebar/close`  | action |        | close sidebar                              |
| `sidebar/toggle` | action |        | toggle sidebar                             |
| `sidebar/opened` | getter |        | `true` or `false` if sidebar opened or not |

### Authorization

|                          | type   | params                        | description                                                        |
| ------------------------ | ------ | ----------------------------- | ------------------------------------------------------------------ |
| `authorization/login`    | action | `{email, password}`           | returns a promise that resolves a Bearer token                     |
| `authorization/register` | action | `{email, password, username}` | create new account. Returns a promise that resolves a Bearer token |
| `authorization/signOut`  | action |                               | destroy session                                                    |
| `authorization/token`    | getter |                               | Bearer token                                                       |

### User

|                | type   | params | description                                    |
| -------------- | ------ | ------ | ---------------------------------------------- |
| `user/fetch`   | action |        | returns a promise that resolves `current_user` |
| `user/set`     | action | {user} | set current user                               |
| `user/current` | getter |        | get current user                               |

### Organisation

|                             | type   | params                 | description                                                                                                       |
| --------------------------- | ------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `organisation/fetchAll`     | action |                        | returns a promise that resolves a list of available organisations                                                 |
| `organisation/setList`      | action | Array of organisations | set available organisations to store                                                                              |
| `organisation/setCurrent`   | action | Organisation           | set organisation context                                                                                          |
| `organisation/fetchCurrent` | action |                        | returns a promist that resolves an organisation context                                                           |
| `organisation/create`       | action | {name}                 | create new organisation. Returns a promist that resolves created organisation. Will add this organisation to list |
| `organisation/list`         | getter |                        | returns organisations list                                                                                        |
| `organisation/current`      | getter |                        | returns current organisation context                                                                              |

## Components

## 1. Form Controls and Elements

### FeLabel

> **Slots:** `default`

### FeButton

> **Slots:** `default`

| Props | Type     | default   | description                           |
| ----- | -------- | --------- | ------------------------------------- |
| color | `String` | `"white"` | Can be one of `white`, `gray`, `blue` |
| size  | `String` | `"small"` | Can be one of `large`, `small`        |

### FeTextField

> **Slots:** `none`

| Props       | Type     | default  | description   |
| ----------- | -------- | -------- | ------------- |
| v-model     | `String` |          |               |
| type        | `String` | `"text"` | type of input |
| label       | `String` |          |               |
| placeholder | `String` |          |               |

### FeTextArea

> **Slots:** `none`

| Props       | Type     | default | description |
| ----------- | -------- | ------- | ----------- |
| v-model     | `String` |         |             |
| label       | `String` |         |             |
| placeholder | `String` |         |             |

### FeSelect

> **Slots:** `none`

| Props       | Type      | default | description                                                                              |
| ----------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| v-model     | `Array`   | `[]`    | Array of selected ids                                                                    |
| options     | `Array`   | `[]`    | `[{id: ..., name: ...}, ...]` <br/> Instead of name can be used `title` or `text` fields |
| multiple    | `Boolean` | `false` |                                                                                          |
| placeholder | `String`  |         |

### FeList

> **Slots:** `none`

| Props    | Type      | default | description                                                                              |
| -------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| v-model  | `Array`   | `[]`    | Array of selected ids                                                                    |
| options  | `Array`   | `[]`    | `[{id: ..., name: ...}, ...]` <br/> Instead of name can be used `title` or `text` fields |
| multiple | `Boolean` | `false` |                                                                                          |

### FeCheckbox

> **Slots:** `default`

| Props   | Type      | default | description |
| ------- | --------- | ------- | ----------- |
| v-model | `Boolean` | `false` |             |

### FeRadio

> **Slots:** `default`

| Props   | Type     | default | description               |
| ------- | -------- | ------- | ------------------------- |
| v-model | `Any`    |         |                           |
| name    | `String` |         | Uniq name for radio group |

### FeFormRow

> **Slots:** `default`

| Props   | Type     | default    | description     |
| ------- | -------- | ---------- | --------------- |
| justify | `String` | `"normal"` | justify-content |

### FeSortableList

> **Slots:** `none`

| Props   | Type    | default | description  |
| ------- | ------- | ------- | ------------ |
| v-model | `Array` | `[]`    | sorted array |

## 2. Layout

### FeApp

Main wrapper for BeachFe application

> **Slots:** `default`

### FeHeader

Header wrapper

> **Slots:** `default`

### FeHeaderSection

Header Section

> **Slots:** `default`

### FeHeaderNav

Header Nav

> **Slots:** `none`

| Props | Type    | default | description |
| ----- | ------- | ------- | ----------- |
| items | `Array` | `[]`    |             |
