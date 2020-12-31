<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>
  <script src="{{asset('js/eruda.js')}}"></script>
  <script>
    eruda.init();
  </script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

  <div id="app">
    <app-component></app-component>
  </div>
  <script src="{{ asset('js/app.js') }}"></script>
  <!-- Menu Toggle Script -->


</body>
</html>