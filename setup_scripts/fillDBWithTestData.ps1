
new-item C:\data\db -itemtype directory | Out-Null

mongod guidemanagement .\mongoSetup.js

Write-Host "`nPress any key to finish...";
$x = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")