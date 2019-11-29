## customizable pdfTable build on react, ts and @react-pdf/renderer

**Note: This Library based on @react-pdf/renderer**

## we provide utils and buildin Views so if you want to build your own Table

## How to install

```sh
yarn add react-table-pdf
npm i react-table-pdf
```

## Table Props

<table>
	<thead>
    <tr>
      <th align="center" valign="top"> Name</th>
      <th align="center" valign="top"> type</th>
      <th align="center" valign="top"> required</th>
    </tr>
  </thead>

  <tbody>
		<tr>
      <td align="center" valign="top">columns</td>
      <td align="center" valign="top">Array</td>
			<td align="center" valign="top">true</td>
		</tr>

    <tr>
      <td align="center" valign="top">dataSource</td>
      <td align="center" valign="top">Array</td>
    		<td align="center" valign="top">true</td>
    	</tr>

    <tr>
      <td align="center" valign="top">rowKey</td>
      <td align="center" valign="top">string | () => string</td>
    		<td align="center" valign="top">true</td>
    	</tr>

    <tr>
      <td align="center" valign="top">style</td>
      <td align="center" valign="top">Style</td>
    		<td align="center" valign="top">false</td>
    	</tr>

    <tr>
      <td align="center" valign="top">headerRowStyle</td>
      <td align="center" valign="top">Style</td>
    		<td align="center" valign="top">false</td>
    	</tr>

    <tr>
      <td align="center" valign="top">rowStyle</td>
      <td align="center" valign="top">Style | () => <Style>{} </td>
    		<td align="center" valign="top">false</td>
    	</tr>
    </tbody>

</table>

## TableRow Props

<table>
	<thead>
    <tr>
      <th align="center" valign="top"> Name</th>
      <th align="center" valign="top"> type</th>
      <th align="center" valign="top"> required</th>
    </tr>
  </thead>

  <tbody>
		<tr>
      <td align="center" valign="top">children</td>
      <td align="center" valign="top">Array</td>
			<td align="center" valign="top">true</td>
		</tr>

    <tr>
      <td align="center" valign="top">isHeader</td>
      <td align="center" valign="top">boolean</td>
    	<td align="center" valign="top">false</td>
    	</tr>

    <tr>
      <td align="center" valign="top">style</td>
      <td align="center" valign="top">Style</td>
    		<td align="center" valign="top">false</td>
    	</tr>
    </tbody>

</table>

## TableCell Props

<table>
	<thead>
    <tr>
      <th align="center" valign="top"> Name</th>
      <th align="center" valign="top"> type</th>
      <th align="center" valign="top"> required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td align="center" valign="top">children</td>
      <td align="center" valign="top">text</td>
    	<td align="center" valign="top">true</td>
    	</tr>

    	<tr>
      <td align="center" valign="top">noBorder</td>
      <td align="center" valign="top">boolean</td>
    		<td align="center" valign="top">false</td>
    	</tr>


    <tr>
      <td align="center" valign="top">style</td>
      <td align="center" valign="top">Style</td>
    		<td align="center" valign="top">false</td>
    	</tr>
    </tbody>

</table>
