$path = 'e:\raviclone\index.html'
$c = [System.IO.File]::ReadAllText($path)

# Remove the data-jump-to from About links so they don't scroll the page
$c = $c.Replace('data-jump-to="#section_about"', '')

[System.IO.File]::WriteAllText($path, $c)
Write-Host "Done. Scrolling to #section_about disabled."
